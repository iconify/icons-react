import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jxiqf-86n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jxiqf-86n"/>`,
		"fallback": "mdi:rainbow",
	});
}

export default Component;
