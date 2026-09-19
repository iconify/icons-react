import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/z/zhb0pva1h.css';
import '../../css/z/zbbn00bvs.css';
import '../../css/t/tu918tbrk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="zhb0pva1h"/><path class="zbbn00bvs"/><path clip-rule="evenodd" class="tu918tbrk"/></g>`,
		"fallback": "iconoir:select-window",
	});
}

export default Component;
