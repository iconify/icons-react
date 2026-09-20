import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/robrqs70q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="robrqs70q"/>`,
		"fallback": "mdi:prezi",
	});
}

export default Component;
