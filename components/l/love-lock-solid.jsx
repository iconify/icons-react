import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/t/tinztzbzr.css';
import '../../css/d/dmr3uabbm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="tinztzbzr"/><path class="dmr3uabbm wm-a"/></g>`,
		"fallback": "withicons:love-lock-solid",
	});
}

export default Component;
