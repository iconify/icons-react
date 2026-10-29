import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/g/gr9--r07w.css';
import '../../css/o/oi26-bbrd.css';
import '../../css/r/ri2oegbdi.css';
import '../../css/p/perttu9bq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="gr9--r07w wm-k"/><path class="oi26-bbrd wm-shadow"/><path class="ri2oegbdi wm-k"/><path class="perttu9bq wm-a"/></g>`,
		"fallback": "withicons:receipt-engrave",
	});
}

export default Component;
