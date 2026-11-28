import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x_jaa1bnw.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/e/e77ebfb5e.css';
import '../../css/u/uj7-h_b4y.css';
import '../../css/b/bqf3fdtgc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary x_jaa1bnw"/><g class="dt0cm9dhy primary"><path class="e77ebfb5e"/><path class="uj7-h_b4y"/><path class="bqf3fdtgc"/></g>`,
		"fallback": "iconaut:square-search-duo",
	});
}

export default Component;
