import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s0phu2bbs.css';
import '../../css/k/k-nzex--m.css';
import '../../css/l/lxh66fbrh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s0phu2bbs"><path class="k-nzex--m"/><path class="lxh66fbrh"/></g>`,
		"fallback": "iconamoon:sign-x-bold",
	});
}

export default Component;
