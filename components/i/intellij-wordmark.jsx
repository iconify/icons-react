import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hri_srbgw.css';
import '../../css/b/bp5yk2bov.css';
import '../../css/n/n61vsbbld.css';
import '../../css/i/irtmvqlwd.css';
import '../../css/e/e4zkmpb1s.css';
import '../../css/o/ozqnaeawl.css';
import '../../css/m/mll8x_bgu.css';
import '../../css/u/u2hf1mgpv.css';
import '../../css/k/k14wxbc0n.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><linearGradient id="SVGGTpQ6cbF" x1="-.72" x2="24.144" y1="7.628" y2="61.252" gradientTransform="translate(0 47.745)scale(.4155)" gradientUnits="userSpaceOnUse"><stop offset=".1" class="hri_srbgw"/><stop offset=".59" class="bp5yk2bov"/></linearGradient><linearGradient id="SVGqNxvsAjS" x1="4.22" x2="62.921" y1="60.02" y2="1.311" gradientTransform="translate(0 47.745)scale(.4155)" gradientUnits="userSpaceOnUse"><stop offset=".21" class="bp5yk2bov"/><stop offset=".7" class="n61vsbbld"/></linearGradient></defs><path clip-rule="evenodd" class="irtmvqlwd"/><path class="e4zkmpb1s"/><path fill="url(#SVGGTpQ6cbF)" class="ozqnaeawl"/><path fill="url(#SVGqNxvsAjS)" class="mll8x_bgu"/><path class="u2hf1mgpv"/><path class="k14wxbc0n"/>`,
		"fallback": "devicon:intellij-wordmark",
	});
}

export default Component;
