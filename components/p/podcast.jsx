import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/r/rk4b-tb6v.css';
import '../../css/b/bv9-61wtr.css';
import '../../css/x/xe_amuk9q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGooeCCccn" x1="9" x2="15" y1=".96" y2="22" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGooeCCccn)" class="rk4b-tb6v"/><path class="bv9-61wtr wm-a"/><path class="wm-shine xe_amuk9q"/></g>`,
		"fallback": "withicons-utsav:podcast",
	});
}

export default Component;
