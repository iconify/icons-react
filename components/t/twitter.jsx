import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dnpratb5n.css';
import '../../css/l/l4g0t2vua.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#SVGScRvgbTy)"><path class="dnpratb5n"/></g><defs><clipPath id="SVGScRvgbTy"><path class="l4g0t2vua"/></clipPath></defs></g>`,
		"fallback": "prime:twitter",
	});
}

export default Component;
