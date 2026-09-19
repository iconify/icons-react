import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/k/k7ay_cy9o.css';
import '../../css/h/h1ith1n0v.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="k7ay_cy9o"/><path class="h1ith1n0v"/></g>`,
		"fallback": "icon-park-outline:link-four",
	});
}

export default Component;
