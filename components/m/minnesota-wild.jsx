import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kba12nbbt.css';
import '../../css/p/p3aehbcct.css';

const viewBox = {"width":130,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#SVGlvgrFbyM)" class="cuyn6tgcc"><path class="kba12nbbt"/></g><defs><clipPath id="SVGlvgrFbyM"><path class="p3aehbcct"/></clipPath></defs></g>`,
		"fallback": "thesvg:minnesota-wild",
	});
}

export default Component;
