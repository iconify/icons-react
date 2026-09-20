import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/djqetsxsa.css';
import '../../css/l/lkde57b9u.css';
import '../../css/d/d_rj9dy1l.css';
import '../../css/j/jhra77bvk.css';
import '../../css/s/sxh1z9g7y.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="djqetsxsa"/><path class="lkde57b9u"/><path class="d_rj9dy1l"/><path class="jhra77bvk"/><path class="sxh1z9g7y"/></g>`,
		"fallback": "skill-icons:unity-light",
	});
}

export default Component;
