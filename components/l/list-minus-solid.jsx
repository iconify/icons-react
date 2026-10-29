import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/r/r2amvxkhh.css';
import '../../css/y/yt2jo5bfh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="r2amvxkhh"/><path class="wm-s yt2jo5bfh"/></g>`,
		"fallback": "withicons:list-minus-solid",
	});
}

export default Component;
