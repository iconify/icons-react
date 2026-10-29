import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/t/tlsu4zyio.css';
import '../../css/z/z5q4-p_io.css';
import '../../css/e/e2gunbbka.css';
import '../../css/s/spnf93r-f.css';
import '../../css/q/qg-givbyo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="tlsu4zyio wm-k"/><path class="wm-s z5q4-p_io"/><path class="e2gunbbka wm-shadow"/><path class="spnf93r-f wm-k"/><path class="qg-givbyo wm-s"/></g>`,
		"fallback": "withicons:phone-call-engrave",
	});
}

export default Component;
