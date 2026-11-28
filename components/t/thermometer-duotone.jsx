import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qtkcedclp.css';
import '../../css/z/zyu3n5hhk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qtkcedclp secondary"/><path class="primary zyu3n5hhk"/></g>`,
		"fallback": "iconaut:thermometer-duotone",
	});
}

export default Component;
