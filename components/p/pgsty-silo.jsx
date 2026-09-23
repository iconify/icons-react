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
		"content": `<linearGradient id="SVGrWZHTbxv" x1="-463.995" x2="651.087" y1="977.027" y2="-138.056" gradientUnits="userSpaceOnUse"><stop offset=".43" class="co4mf4bsz"/><stop offset=".662" class="c6h3dtb_n"/><stop offset=".771" class="ebdla0cma"/></linearGradient><path fill="url(#SVGrWZHTbxv)" class="w2k-n7s4b"/>`,
		"fallback": "selfhst:pgsty-silo",
	});
}

export default Component;
