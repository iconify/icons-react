import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/c/c3brbdctz.css';
import '../../css/p/pgmcs8b1q.css';
import '../../css/x/xw4rj9ggz.css';
import '../../css/q/qzys12byp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="c3brbdctz wm-k"/><path class="pgmcs8b1q wm-a"/><path class="wm-k xw4rj9ggz"/><path class="qzys12byp wm-a"/></g>`,
		"fallback": "withicons:list-tree-sketch",
	});
}

export default Component;
