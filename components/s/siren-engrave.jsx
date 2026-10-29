import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/u/un-f6fbqt.css';
import '../../css/c/c-64dzb7h.css';
import '../../css/u/u5_eubi9h.css';
import '../../css/e/ei78qw1bk.css';
import '../../css/q/qwc4vnbsf.css';
import '../../css/i/idtixcqse.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="un-f6fbqt wm-k"/><path class="c-64dzb7h wm-s"/><path class="u5_eubi9h wm-shadow"/><path class="ei78qw1bk wm-k"/><path class="qwc4vnbsf wm-a"/><path class="idtixcqse wm-s"/></g>`,
		"fallback": "withicons:siren-engrave",
	});
}

export default Component;
