import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/t/tkwvg0boo.css';
import '../../css/a/a7bdy2bmd.css';
import '../../css/m/mgdy1kbem.css';
import '../../css/x/x415d-gor.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGFJDHsdcQ" x1="9" x2="15" y1="5" y2="20.99" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path class="tkwvg0boo wm-s"/><path fill="url(#SVGFJDHsdcQ)" class="a7bdy2bmd"/><path class="mgdy1kbem wm-s"/><path class="wm-shine x415d-gor"/></g>`,
		"fallback": "withicons-utsav:list-x",
	});
}

export default Component;
