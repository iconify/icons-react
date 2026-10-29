import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/e/e4cehbb5f.css';
import '../../css/b/b7hrjfb0n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="e4cehbb5f wm-k"/><path class="b7hrjfb0n wm-a"/></g>`,
		"fallback": "withicons:mic-vocal-sketch",
	});
}

export default Component;
