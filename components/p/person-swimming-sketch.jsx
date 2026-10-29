import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/j/j62xyjbvv.css';
import '../../css/u/u4mr4cc1c.css';
import '../../css/y/yw4actbtc.css';
import '../../css/e/evlq5sb4r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="j62xyjbvv wm-k"/><path class="u4mr4cc1c wm-a"/><path class="wm-k yw4actbtc"/><path class="evlq5sb4r wm-a"/></g>`,
		"fallback": "withicons:person-swimming-sketch",
	});
}

export default Component;
