import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zmnjdabrt.css';
import '../../css/y/yooflcckh.css';
import '../../css/z/z6p2afbnj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zmnjdabrt"/><path class="yooflcckh"/><path class="z6p2afbnj"/></g>`,
		"fallback": "si:more-horiz-circle-duotone",
	});
}

export default Component;
