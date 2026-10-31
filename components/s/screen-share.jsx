import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/l/lqh6gq2xh.css';
import '../../css/k/ksu2s-b0l.css';
import '../../css/q/qkh44jb8x.css';
import '../../css/k/kttgb7bkk.css';
import '../../css/z/znsxmibtn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="lqh6gq2xh wm-shadow"/><path class="ksu2s-b0l wm-shadow"/><path class="qkh44jb8x"/><path class="kttgb7bkk"/><path class="wm-s znsxmibtn"/></g>`,
		"fallback": "withicons-brutal:screen-share",
	});
}

export default Component;
