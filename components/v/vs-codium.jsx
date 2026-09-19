import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xp7upebym.css';
import '../../css/k/k8zwn064d.css';
import '../../css/z/zry2zrb8z.css';
import '../../css/q/q1xj7ub5q.css';
import '../../css/l/lmb380bdf.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xp7upebym"><path class="k8zwn064d"/><path class="zry2zrb8z"/><path class="q1xj7ub5q"/><path class="lmb380bdf"/></g>`,
		"fallback": "catppuccin:vs-codium",
	});
}

export default Component;
