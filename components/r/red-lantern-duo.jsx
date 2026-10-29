import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/s/svr4a2i7c.css';
import '../../css/n/ndqjoqqah.css';
import '../../css/s/srziv7glx.css';
import '../../css/p/p4aqtdt2g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="svr4a2i7c"/><path class="ndqjoqqah wm-a"/><path class="srziv7glx"/><path class="p4aqtdt2g wm-a"/></g>`,
		"fallback": "withicons:red-lantern-duo",
	});
}

export default Component;
