import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/y/yi7trr6rm.css';
import '../../css/w/ws4nanlkn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="yi7trr6rm"/><path class="wm-a ws4nanlkn"/></g>`,
		"fallback": "withicons:north-star-solid",
	});
}

export default Component;
