import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/e/eo5hqoh_u.css';
import '../../css/z/zc19i2bov.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="eo5hqoh_u wm-k"/><path class="wm-a zc19i2bov"/></g>`,
		"fallback": "withicons:lunar-drum-gloss",
	});
}

export default Component;
