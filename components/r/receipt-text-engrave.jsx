import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/u/ufgy3r3fq.css';
import '../../css/o/oi26-bbrd.css';
import '../../css/r/ri2oegbdi.css';
import '../../css/w/w302-hd8l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="ufgy3r3fq wm-k"/><path class="oi26-bbrd wm-shadow"/><path class="ri2oegbdi wm-k"/><path class="w302-hd8l wm-a"/></g>`,
		"fallback": "withicons:receipt-text-engrave",
	});
}

export default Component;
