import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/u/u1wanmiwb.css';
import '../../css/w/wr7_9j2ie.css';
import '../../css/g/g7nk-s9us.css';
import '../../css/o/ojvzaxljq.css';
import '../../css/p/p-xrl3bvq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="u1wanmiwb"/><path class="wm-k wr7_9j2ie"/><path class="g7nk-s9us wm-a"/><path class="ojvzaxljq wm-k"/><path class="p-xrl3bvq wm-a"/></g>`,
		"fallback": "withicons:message-circle-plus-sketch",
	});
}

export default Component;
