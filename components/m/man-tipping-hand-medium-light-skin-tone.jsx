import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipop5yyqc.css';
import '../../css/l/lx1n_wcyh.css';
import '../../css/t/tc08vkaes.css';
import '../../css/l/ltp463b0e.css';
import '../../css/b/bp5f_tb7l.css';
import '../../css/e/e881j01wa.css';
import '../../css/s/soxdf5zox.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ipop5yyqc"/><path class="lx1n_wcyh"/><path class="tc08vkaes"/><path class="ltp463b0e"/><path class="bp5f_tb7l"/><path class="e881j01wa"/><path class="soxdf5zox"/>`,
		"fallback": "openmoji:man-tipping-hand-medium-light-skin-tone",
	});
}

export default Component;
