import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/h/hrdkuzqjh.css';
import '../../css/b/b7u2wk65u.css';
import '../../css/l/le9e7rb0z.css';
import '../../css/x/xeeku-bxl.css';
import '../../css/w/wz8gm4bgl.css';
import '../../css/w/wqb-0n4qk.css';
import '../../css/q/qzc_kdb0n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="hrdkuzqjh wm-k"/><path class="b7u2wk65u wm-a"/><path class="le9e7rb0z wm-s"/><path class="wm-shadow xeeku-bxl"/><path class="wm-k wz8gm4bgl"/><path class="wm-a wqb-0n4qk"/><path class="qzc_kdb0n wm-s"/></g>`,
		"fallback": "withicons:mail-warning-engrave",
	});
}

export default Component;
