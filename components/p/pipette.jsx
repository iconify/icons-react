import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/t/t7jplsble.css';
import '../../css/g/gqykfub5p.css';
import '../../css/i/iqurwmbzk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGqgG4Nexn" x1="8.88" x2="14.88" y1="2.74" y2="21.49" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGqgG4Nexn)" class="t7jplsble"/><path class="gqykfub5p wm-a"/><path class="iqurwmbzk wm-shine"/></g>`,
		"fallback": "withicons-utsav:pipette",
	});
}

export default Component;
