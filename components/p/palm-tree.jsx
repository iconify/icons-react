import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/g/g5wwvxb6o.css';
import '../../css/q/qdsk_gbyr.css';
import '../../css/w/wxz0-ocxv.css';
import '../../css/m/mi-j0bkan.css';
import '../../css/e/e8bqvzsim.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="g5wwvxb6o wm-shadow"/><path class="qdsk_gbyr"/><path class="wxz0-ocxv"/><path class="mi-j0bkan"/><path class="e8bqvzsim"/></g>`,
		"fallback": "withicons-retro:palm-tree",
	});
}

export default Component;
