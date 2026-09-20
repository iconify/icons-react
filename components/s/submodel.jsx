import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e_p047bgx.css';
import '../../css/d/dr6_unbdd.css';
import '../../css/n/n-r5jnbyj.css';
import '../../css/z/zihl-zbnr.css';
import '../../css/x/x5zms70_f.css';
import '../../css/p/px04kgtoj.css';
import '../../css/t/teu5sp4cu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path fill="url(#SVGETXAOb1m)" class="e_p047bgx"/><path fill="url(#SVGETXAOb1m)" class="dr6_unbdd"/><path fill="url(#SVG0T7fudDo)" clip-rule="evenodd" class="n-r5jnbyj"/><defs><linearGradient id="SVGETXAOb1m" x1="0" x2="24" y1="14.5" y2="14.5" gradientUnits="userSpaceOnUse"><stop class="zihl-zbnr"/><stop offset="1" class="x5zms70_f"/></linearGradient><linearGradient id="SVG0T7fudDo" x1=".5" x2="23" y1="8" y2="7.5" gradientUnits="userSpaceOnUse"><stop class="px04kgtoj"/><stop offset="1" class="teu5sp4cu"/></linearGradient></defs>`,
		"fallback": "thesvg-color:submodel",
	});
}

export default Component;
