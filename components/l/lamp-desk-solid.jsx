import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qvuqtgnqt.css';
import '../../css/x/xqpp5ta7p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qvuqtgnqt"/><path class="xqpp5ta7p"/></g>`,
		"fallback": "iconaut:lamp-desk-solid",
	});
}

export default Component;
