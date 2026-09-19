import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rbxsf3bxy.css';
import '../../css/l/lczsmyy_j.css';
import '../../css/m/m7u4wybxw.css';
import '../../css/i/ife7p1z_o.css';
import '../../css/e/e07sxccco.css';
import '../../css/n/nolzmwblp.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><linearGradient id="SVGGUjzzcxp" x1="53.327" x2="53.327" y1="2.095" y2="126.143" gradientUnits="userSpaceOnUse"><stop offset="0" class="rbxsf3bxy"/><stop offset=".614" class="rbxsf3bxy"/><stop offset="1" class="lczsmyy_j"/></linearGradient><linearGradient id="SVGnAMLXcyp" x1="85.463" x2="85.463" y1="9.408" y2="119.121" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7u4wybxw"/><stop offset=".7" class="ife7p1z_o"/></linearGradient></defs><path fill="url(#SVGGUjzzcxp)" class="e07sxccco"/><path fill="url(#SVGnAMLXcyp)" class="nolzmwblp"/>`,
		"fallback": "devicon:opera",
	});
}

export default Component;
