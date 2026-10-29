import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/s/sfq88wc1b.css';
import '../../css/s/sl6ffobnc.css';
import '../../css/h/hm9dey-ai.css';
import '../../css/y/yw4fz_b6b.css';
import '../../css/z/z08dbetjo.css';
import '../../css/h/hl1atb0al.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="sfq88wc1b wm-k"/><path class="sl6ffobnc wm-a"/><path class="hm9dey-ai wm-shadow"/><path class="wm-k yw4fz_b6b"/><path class="wm-a z08dbetjo"/><path class="hl1atb0al wm-a"/></g>`,
		"fallback": "withicons:target-engrave",
	});
}

export default Component;
