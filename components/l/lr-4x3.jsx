import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nbk05b36b.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/g/g6tt4h42f.css';
import '../../css/i/inot6ubzv.css';
import '../../css/u/ug4u65bho.css';
import '../../css/s/s1zu4cc3t.css';
import '../../css/p/pcw4ug0ot.css';

const viewBox = {"width":640,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><clipPath id="SVGSJkC5dXi"><path class="nbk05b36b"/></clipPath></defs><g clip-path="url(#SVGSJkC5dXi)" transform="scale(.9375)" class="d2kvgvbvc"><path class="g6tt4h42f"/><path class="inot6ubzv"/><path class="ug4u65bho"/><path class="s1zu4cc3t"/><path class="pcw4ug0ot"/></g>`,
		"fallback": "flag:lr-4x3",
	});
}

export default Component;
