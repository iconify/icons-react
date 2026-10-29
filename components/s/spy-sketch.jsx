import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/e/eab5obbwx.css';
import '../../css/s/s0a204b1r.css';
import '../../css/y/ysas-lb9p.css';
import '../../css/l/le_23rbrp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="eab5obbwx"/><path class="s0a204b1r wm-k"/><path class="wm-k ysas-lb9p"/><path class="le_23rbrp wm-a"/></g>`,
		"fallback": "withicons:spy-sketch",
	});
}

export default Component;
