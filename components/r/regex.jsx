import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/e/e5l2t5bnm.css';
import '../../css/k/ka162yg0t.css';
import '../../css/p/pwqhvxb2x.css';
import '../../css/z/zbgq8xytk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="e5l2t5bnm wm-shadow"/><path class="ka162yg0t wm-shadow"/><path class="pwqhvxb2x"/><path class="zbgq8xytk"/></g>`,
		"fallback": "withicons-brutal:regex",
	});
}

export default Component;
