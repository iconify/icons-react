import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/y/yy5liwywt.css';
import '../../css/f/f73gxw4li.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="wm-k yy5liwywt"/><path class="f73gxw4li wm-a"/></g>`,
		"fallback": "withicons:table-of-contents-gloss",
	});
}

export default Component;
