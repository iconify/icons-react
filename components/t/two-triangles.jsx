import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mzv-97b_r.css';
import '../../css/b/bgu0hmbxv.css';
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
		"content": `<g class="ft5dv1b6b"><path class="mzv-97b_r"/><path class="bgu0hmbxv"/><path class="zn_5giv4w"/><path class="d2qkukb0p"/></g>`,
		"fallback": "icon-park-solid:two-triangles",
	});
}

export default Component;
