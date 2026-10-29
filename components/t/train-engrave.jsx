import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/r/r7uu9fcak.css';
import '../../css/p/pf64yv0wt.css';
import '../../css/r/r8i9bcc2r.css';
import '../../css/l/ly23pmblx.css';
import '../../css/g/gt402wbqt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="r7uu9fcak wm-k"/><path class="pf64yv0wt wm-a"/><path class="r8i9bcc2r wm-shadow"/><path class="ly23pmblx wm-k"/><path class="gt402wbqt wm-a"/></g>`,
		"fallback": "withicons:train-engrave",
	});
}

export default Component;
