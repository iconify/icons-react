import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h-htnbcov.css';
import '../../css/h/h79w7ebun.css';
import '../../css/y/y15y19baw.css';
import '../../css/a/ab_vj2bdb.css';
import '../../css/q/q5w-gwbjp.css';
import '../../css/b/bytekl23q.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><linearGradient id="SVGLDVpacBn" x1="69.035" x2="77.473" y1="107.999" y2="79.786" gradientUnits="userSpaceOnUse"><stop offset="0" class="h-htnbcov"/><stop offset=".53" class="h79w7ebun"/><stop offset="1" class="y15y19baw"/></linearGradient></defs><path fill="url(#SVGLDVpacBn)" class="ab_vj2bdb"/><path class="q5w-gwbjp"/><path class="bytekl23q"/>`,
		"fallback": "devicon:sublimetext",
	});
}

export default Component;
