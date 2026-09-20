import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/i0mshkbiy.css';
import '../../css/h/hbya5l-0v.css';
import '../../css/d/d7557zb1x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="i0mshkbiy"/><path clip-rule="evenodd" class="hbya5l-0v"/><path class="d7557zb1x"/></g>`,
		"fallback": "reicon:money-plus2",
	});
}

export default Component;
