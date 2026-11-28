import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/z/zn6rbk6zn.css';
import '../../css/a/azejgcbty.css';
import '../../css/c/clnq2hbxi.css';
import '../../css/w/wt3kbbycd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="zn6rbk6zn"/><path class="azejgcbty"/><path class="clnq2hbxi"/><path class="wt3kbbycd"/></g>`,
		"fallback": "iconaut:trash-can",
	});
}

export default Component;
