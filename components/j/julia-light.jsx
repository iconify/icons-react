import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/djqetsxsa.css';
import '../../css/l/lnnmczb-l.css';
import '../../css/y/yd5g6m-wm.css';
import '../../css/o/oj999ohem.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="djqetsxsa"/><path class="lnnmczb-l"/><path class="yd5g6m-wm"/><path class="oj999ohem"/></g>`,
		"fallback": "skill-icons:julia-light",
	});
}

export default Component;
