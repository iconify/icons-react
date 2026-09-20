import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n1tq8bcdj.css';
import '../../css/w/wngjivwua.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="n1tq8bcdj"/><path class="wngjivwua"/></g>`,
		"fallback": "streamline-ultimate-color:move-expand-vertical",
	});
}

export default Component;
