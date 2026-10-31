import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/n/nwiyk0bsa.css';
import '../../css/n/ni3gewc2t.css';
import '../../css/r/rsj_e1hjb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGTmEhAwAQ" x1="9" x2="15" y1="1.52" y2="22.49" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGTmEhAwAQ)" class="nwiyk0bsa"/><path class="ni3gewc2t wm-a"/><path class="rsj_e1hjb wm-shine"/></g>`,
		"fallback": "withicons-utsav:lasso",
	});
}

export default Component;
