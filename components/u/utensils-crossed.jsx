import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/n/ncdao-6fr.css';
import '../../css/p/pcr53ki-o.css';
import '../../css/l/lf9_nssbk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGlA692cAa" x1="10.68" x2="16.68" y1="1.6" y2="19.51" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGlA692cAa)" class="ncdao-6fr"/><path class="pcr53ki-o wm-a"/><path class="lf9_nssbk wm-shine"/></g>`,
		"fallback": "withicons-utsav:utensils-crossed",
	});
}

export default Component;
