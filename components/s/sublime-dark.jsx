import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m-3my0bau.css';
import '../../css/o/o_qi1uqpa.css';
import '../../css/a/as_o3w65i.css';
import '../../css/r/rldk-2r-c.css';
import '../../css/j/j15ty4b9p.css';
import '../../css/g/gvb26tbkk.css';
import '../../css/h/h-htnbcov.css';
import '../../css/h/h79w7ebun.css';
import '../../css/y/y15y19baw.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#SVGv3WPqdcU)"><path class="m-3my0bau"/><g clip-path="url(#SVG5qy9KbCN)"><path fill="url(#SVGW46ibejO)" class="o_qi1uqpa"/><path class="as_o3w65i"/><path class="rldk-2r-c"/></g></g><defs><clipPath id="SVGv3WPqdcU"><path class="j15ty4b9p"/></clipPath><clipPath id="SVG5qy9KbCN"><path class="gvb26tbkk"/></clipPath><linearGradient id="SVGW46ibejO" x1="7476.84" x2="8041.22" y1="5387.54" y2="3500.4" gradientUnits="userSpaceOnUse"><stop class="h-htnbcov"/><stop offset=".53" class="h79w7ebun"/><stop offset="1" class="y15y19baw"/></linearGradient></defs></g>`,
		"fallback": "skill-icons:sublime-dark",
	});
}

export default Component;
