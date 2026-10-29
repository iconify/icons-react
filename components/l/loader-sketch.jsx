import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/q/qjbdfqb6h.css';
import '../../css/e/e7th9kyis.css';
import '../../css/x/x4_zs5rtw.css';
import '../../css/l/lpsygpfiq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="qjbdfqb6h wm-k"/><path class="e7th9kyis wm-a"/><path class="wm-k x4_zs5rtw"/><path class="lpsygpfiq wm-a"/></g>`,
		"fallback": "withicons:loader-sketch",
	});
}

export default Component;
