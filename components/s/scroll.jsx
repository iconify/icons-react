import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/f/fcfupcc6q.css';
import '../../css/u/u0xwubkjf.css';
import '../../css/c/cut121afa.css';
import '../../css/c/cdyhiybrh.css';
import '../../css/x/xj97x-blp.css';
import '../../css/o/ohnrqjbnx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="fcfupcc6q"/><path class="u0xwubkjf"/><path class="cut121afa"/><path class="cdyhiybrh"/><path class="xj97x-blp"/><path class="ohnrqjbnx"/></g>`,
		"fallback": "iconaut:scroll",
	});
}

export default Component;
