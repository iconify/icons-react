import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tmnzv3r5v.css';
import '../../css/t/tqhdqgvlz.css';
import '../../css/z/zw6wy9b7j.css';
import '../../css/q/qe9_8fenb.css';
import '../../css/e/e6c6w_4sj.css';
import '../../css/n/nzckjsknc.css';
import '../../css/s/sva3z357y.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="tmnzv3r5v"/><path class="tqhdqgvlz"/><path class="zw6wy9b7j"/><path clip-rule="evenodd" class="qe9_8fenb"/><path class="e6c6w_4sj"/><path class="nzckjsknc"/><path class="sva3z357y"/></g>`,
		"fallback": "glyphs:landmark-1-bold",
	});
}

export default Component;
