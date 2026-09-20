import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bgbypwxxy.css';
import '../../css/m/mavie6bka.css';
import '../../css/e/e5vcnnbbh.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="bgbypwxxy"/><path clip-rule="evenodd" class="mavie6bka"/><path class="e5vcnnbbh"/></g>`,
		"fallback": "pepicons-print:music-note-double",
	});
}

export default Component;
