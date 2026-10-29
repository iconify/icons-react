import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/y/yyu067_dd.css';
import '../../css/b/bqrrj6b0k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="yyu067_dd"/><path class="bqrrj6b0k wm-a"/></g>`,
		"fallback": "withicons:timer-solid",
	});
}

export default Component;
