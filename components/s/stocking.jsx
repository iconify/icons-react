import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/c/cle14kovr.css';
import '../../css/i/iet4eac3k.css';
import '../../css/h/hh1q3qlma.css';
import '../../css/n/nmurzybgy.css';
import '../../css/i/ivtghbkhv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVG4NxHDcqK" x1="10" x2="16" y1="2.5" y2="22" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVG4NxHDcqK)" class="cle14kovr"/><path class="iet4eac3k wm-a"/><path class="hh1q3qlma wm-shine"/><path class="nmurzybgy wm-shine"/><path class="ivtghbkhv wm-shine"/></g>`,
		"fallback": "withicons-utsav:stocking",
	});
}

export default Component;
