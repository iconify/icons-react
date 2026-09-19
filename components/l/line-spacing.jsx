import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w99iq9bkj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w99iq9bkj"/>`,
		"fallback": "cil:line-spacing",
	});
}

export default Component;
