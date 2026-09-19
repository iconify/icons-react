import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/k/kyw_6y3kt.css';
import '../../css/h/hs5grjb0z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="kyw_6y3kt"/><path class="hs5grjb0z"/></g>`,
		"fallback": "hugeicons:mail-x",
	});
}

export default Component;
