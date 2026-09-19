import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/x/xq0l1dbym.css';
import '../../css/k/k_y44mokq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><rect class="xq0l1dbym"/><path class="k_y44mokq"/></g>`,
		"fallback": "icon-park-outline:laptop-computer",
	});
}

export default Component;
