import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/j/j2ogkab2m.css';
import '../../css/p/pnzlkwbqz.css';
import '../../css/k/kpvjw-b-d.css';
import '../../css/o/ocgv_nb9v.css';
import '../../css/r/r37cz0bti.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="j2ogkab2m wm-shadow"/><path class="pnzlkwbqz"/><path class="kpvjw-b-d"/><path class="ocgv_nb9v"/><path class="r37cz0bti"/></g>`,
		"fallback": "withicons-retro:pizza",
	});
}

export default Component;
