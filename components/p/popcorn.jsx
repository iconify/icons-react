import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/g/gkzcf4bwf.css';
import '../../css/p/ptx-bkb1u.css';
import '../../css/s/sasyi_uvy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGt0GY0dBH" x1="9" x2="15" y1="1.98" y2="22.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGt0GY0dBH)" class="gkzcf4bwf"/><path class="ptx-bkb1u wm-a"/><path class="sasyi_uvy wm-shine"/></g>`,
		"fallback": "withicons-utsav:popcorn",
	});
}

export default Component;
