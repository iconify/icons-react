import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/u/unr11sbei.css';
import '../../css/g/g9p82pzun.css';
import '../../css/z/zv0d7mbzd.css';
import '../../css/i/ibfvyt9hh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVG9Rd0vb7z" x1="9" x2="15" y1="1.5" y2="22.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVG9Rd0vb7z)" class="unr11sbei"/><path class="g9p82pzun wm-shine"/><path class="wm-shine zv0d7mbzd"/><path class="ibfvyt9hh wm-shine"/></g>`,
		"fallback": "withicons-utsav:radar",
	});
}

export default Component;
