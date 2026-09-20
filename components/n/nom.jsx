import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o6pex7q3c.css';
import '../../css/r/rgqpz_b2c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o6pex7q3c"/><path class="rgqpz_b2c"/>`,
		"fallback": "token:nom",
	});
}

export default Component;
