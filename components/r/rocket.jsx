import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/b/bunwpimed.css';
import '../../css/g/g71l8mfcw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="bunwpimed"/><path class="g71l8mfcw wm-a"/></g>`,
		"fallback": "withicons:rocket",
	});
}

export default Component;
