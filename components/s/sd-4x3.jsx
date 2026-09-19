import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nbk05b36b.css';
import '../../css/n/nv9qcacyl.css';
import '../../css/f/fgo_pksht.css';
import '../../css/p/ph3jxnbzf.css';
import '../../css/o/oafavueaw.css';
import '../../css/g/ggalogbdw.css';

const viewBox = {"width":640,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><clipPath id="SVGSJkC5dXi"><path class="nbk05b36b"/></clipPath></defs><g clip-path="url(#SVGSJkC5dXi)" transform="scale(.9375)" class="nv9qcacyl"><path class="fgo_pksht"/><path class="ph3jxnbzf"/><path class="oafavueaw"/><path class="ggalogbdw"/></g>`,
		"fallback": "flag:sd-4x3",
	});
}

export default Component;
