import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d_q5cxbvg.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d_q5cxbvg"/>`,
		"fallback": "fa6-solid:truck-medical",
	});
}

export default Component;
