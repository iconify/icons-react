import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/h/h7pvhhbbp.css';
import '../../css/v/v6_d7lb8o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="h7pvhhbbp"/><path class="v6_d7lb8o wm-s"/></g>`,
		"fallback": "withicons:oven-solid",
	});
}

export default Component;
