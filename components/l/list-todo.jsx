import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/h/h5d9b0qbs.css';
import '../../css/q/q34txuplw.css';
import '../../css/d/dcpluuyik.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGDGTaLb4v" x1="9" x2="15" y1="3" y2="21.99" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGDGTaLb4v)" class="h5d9b0qbs"/><path class="q34txuplw wm-a"/><path class="dcpluuyik wm-shine"/></g>`,
		"fallback": "withicons-utsav:list-todo",
	});
}

export default Component;
