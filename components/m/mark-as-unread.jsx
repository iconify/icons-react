import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/etsfcbjxk.css';
import '../../css/c/cg17v90sw.css';
import '../../css/g/ghk1tgbqk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="etsfcbjxk"/><path class="cg17v90sw"/><path class="ghk1tgbqk"/></g>`,
		"fallback": "tdesign:mark-as-unread",
	});
}

export default Component;
