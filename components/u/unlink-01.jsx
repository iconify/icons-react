import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/ypuw9196q.css';
import '../../css/h/hd8qcwbxu.css';
import '../../css/c/c-ga8gx1q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ypuw9196q"/><path class="hd8qcwbxu"/><path class="c-ga8gx1q"/></g>`,
		"fallback": "hugeicons:unlink-01",
	});
}

export default Component;
