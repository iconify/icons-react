import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s0phu2bbs.css';
import '../../css/q/q07-vixib.css';
import '../../css/q/qkr8c8bcd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s0phu2bbs"><circle class="q07-vixib"/><path class="qkr8c8bcd"/></g>`,
		"fallback": "iconamoon:sign-plus-circle-bold",
	});
}

export default Component;
