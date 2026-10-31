import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/q/qdzjr2b0v.css';
import '../../css/t/t00hm6iqm.css';
import '../../css/l/ltxunumvw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGekpAQb5i" x1="8.97" x2="14.97" y1="1.79" y2="22.49" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGekpAQb5i)" class="qdzjr2b0v"/><path class="t00hm6iqm wm-a"/><path class="ltxunumvw wm-shine"/></g>`,
		"fallback": "withicons-utsav:telescope",
	});
}

export default Component;
