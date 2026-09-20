import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jwuvm3_ix.css';
import '../../css/b/b_vjub-jh.css';

const viewBox = {"width":1544,"height":1496};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><clipPath id="SVGphCPse2K" clipPathUnits="userSpaceOnUse"><path class="jwuvm3_ix"/></clipPath></defs><g clip-path="url(#SVGphCPse2K)"><path class="b_vjub-jh"/></g>`,
		"fallback": "thesvg-color:maxis-berhad",
	});
}

export default Component;
