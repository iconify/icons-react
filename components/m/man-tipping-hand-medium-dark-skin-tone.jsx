import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipop5yyqc.css';
import '../../css/i/i6koclb_b.css';
import '../../css/u/uc8ohxgzt.css';
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
		"content": `<path class="ipop5yyqc"/><path class="i6koclb_b"/><path class="uc8ohxgzt"/><path class="ltp463b0e"/><path class="bp5f_tb7l"/><path class="e881j01wa"/><path class="soxdf5zox"/>`,
		"fallback": "openmoji:man-tipping-hand-medium-dark-skin-tone",
	});
}

export default Component;
