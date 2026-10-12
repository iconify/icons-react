import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zgx717bta.css';
import '../../css/j/jfpi41xqg.css';
import '../../css/r/r8p2bpbul.css';
import '../../css/k/kvgcy3b5u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle transform="rotate(90 12 5.98)" class="zgx717bta"/><ellipse transform="rotate(90 12.17 18.72)" class="jfpi41xqg"/><circle transform="rotate(90 12 5.98)" class="r8p2bpbul"/><path class="kvgcy3b5u"/></g>`,
		"fallback": "andrsrxn:map-pin-line-area",
	});
}

export default Component;
