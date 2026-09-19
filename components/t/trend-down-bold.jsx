import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s0phu2bbs.css';
import '../../css/u/umch1hbbu.css';
import '../../css/f/f5y0d7xbc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s0phu2bbs"><path class="umch1hbbu"/><path class="f5y0d7xbc"/></g>`,
		"fallback": "iconamoon:trend-down-bold",
	});
}

export default Component;
