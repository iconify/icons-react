import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/co4mf4bsz.css';
import '../../css/c/c6h3dtb_n.css';
import '../../css/e/ebdla0cma.css';
import '../../css/w/w2k-n7s4b.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVGPGTdjbtL" x1="-464" x2="651.1" y1="977" y2="-138.1" gradientUnits="userSpaceOnUse"><stop offset=".43" class="co4mf4bsz"/><stop offset=".662" class="c6h3dtb_n"/><stop offset=".771" class="ebdla0cma"/></linearGradient><path fill="url(#SVGPGTdjbtL)" class="w2k-n7s4b"/>`,
		"fallback": "selfhst:pgsty-silo",
	});
}

export default Component;
