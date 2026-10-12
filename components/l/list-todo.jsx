import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wjkwgzqgf.css';
import '../../css/f/ffhll8bfm.css';
import '../../css/y/yxph1hbqe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wjkwgzqgf"/><rect transform="matrix(0 -1 -1 0 7.81 18.04)" class="ffhll8bfm"/><rect transform="matrix(0 -1 -1 0 7.81 18.04)" class="yxph1hbqe"/></g>`,
		"fallback": "andrsrxn:list-todo",
	});
}

export default Component;
