import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/y/yau0jgb8x.css';
import '../../css/j/jwvu68bbz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="yau0jgb8x"/><path class="jwvu68bbz wm-s"/></g>`,
		"fallback": "withicons:remove-formatting-solid",
	});
}

export default Component;
