import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/j/jrv87_b6w.css';
import '../../css/p/p3ugz7wqs.css';
import '../../css/b/b82dfnb_o.css';
import '../../css/i/i9rgmobgb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="jrv87_b6w wm-k"/><path class="p3ugz7wqs wm-shadow"/><path class="b82dfnb_o wm-k"/><path class="i9rgmobgb wm-a"/></g>`,
		"fallback": "withicons:octagon-alert-engrave",
	});
}

export default Component;
