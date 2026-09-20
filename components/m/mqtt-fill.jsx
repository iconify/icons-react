import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fy42bub1l.css';
import '../../css/b/bm6480m4f.css';
import '../../css/j/j5tfbcb4q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fy42bub1l"/><path class="bm6480m4f"/><path class="j5tfbcb4q"/>`,
		"fallback": "mingcute:mqtt-fill",
	});
}

export default Component;
