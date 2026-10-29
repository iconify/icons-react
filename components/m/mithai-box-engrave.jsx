import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/e/esr8mjbfe.css';
import '../../css/k/k6ysd255s.css';
import '../../css/c/cjaxhhrrf.css';
import '../../css/b/bcc9m6h1q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="esr8mjbfe"/><path class="k6ysd255s wm-shadow"/><path class="cjaxhhrrf"/><path class="bcc9m6h1q"/></g>`,
		"fallback": "withicons:mithai-box-engrave",
	});
}

export default Component;
