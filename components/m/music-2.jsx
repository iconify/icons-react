import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/c/csmpwqo2n.css';
import '../../css/w/w083kbw9o.css';
import '../../css/n/nygk_w2nr.css';
import '../../css/m/m89w97j4w.css';
import '../../css/u/uq0g5dbcr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="csmpwqo2n wm-shadow"/><path class="w083kbw9o wm-shadow"/><path class="nygk_w2nr"/><path class="m89w97j4w"/><path class="uq0g5dbcr"/></g>`,
		"fallback": "withicons-brutal:music-2",
	});
}

export default Component;
