import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o1yavdbge.css';
import '../../css/b/bqog6ccsk.css';
import '../../css/z/zn_5giv4w.css';
import '../../css/d/d2qkukb0p.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="o1yavdbge"/><path class="bqog6ccsk"/><path class="zn_5giv4w"/><path class="d2qkukb0p"/></g>`,
		"fallback": "icon-park-outline:two-triangles",
	});
}

export default Component;
