import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/j/j3tr00tly.css';
import '../../css/r/rbdilkb4w.css';
import '../../css/m/me09pcdki.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGuNdJVdfD" x1="9.02" x2="15.02" y1="2" y2="21.95" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGuNdJVdfD)" class="j3tr00tly"/><path class="rbdilkb4w wm-a"/><path class="me09pcdki wm-shine"/></g>`,
		"fallback": "withicons-utsav:wand",
	});
}

export default Component;
