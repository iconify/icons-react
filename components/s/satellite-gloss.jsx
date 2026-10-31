import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/i/ijbor0d4k.css';
import '../../css/a/anw3e0b6f.css';
import '../../css/x/xmveqg3-y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="ijbor0d4k wm-k"/><path class="anw3e0b6f wm-k"/><path class="wm-s xmveqg3-y"/></g>`,
		"fallback": "withicons:satellite-gloss",
	});
}

export default Component;
