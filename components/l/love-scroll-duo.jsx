import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/p/pc_owj88e.css';
import '../../css/h/huhv39n0m.css';
import '../../css/d/d3l-qbctv.css';
import '../../css/i/iyhzocb_q.css';
import '../../css/o/ott85pgeh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="pc_owj88e"/><path class="huhv39n0m wm-s"/><path class="d3l-qbctv wm-s"/><path class="iyhzocb_q"/><path class="ott85pgeh wm-a"/></g>`,
		"fallback": "withicons:love-scroll-duo",
	});
}

export default Component;
