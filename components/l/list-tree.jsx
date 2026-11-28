import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/b/bvpz28b_m.css';
import '../../css/k/k6y2b5b4m.css';
import '../../css/c/cskso5bei.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="bvpz28b_m"/><path class="k6y2b5b4m"/><path class="cskso5bei"/></g>`,
		"fallback": "iconaut:list-tree",
	});
}

export default Component;
