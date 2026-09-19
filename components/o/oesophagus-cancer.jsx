import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/ot56pi4cg.css';
import '../../css/y/ydz_1jyli.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ot56pi4cg"/><path clip-rule="evenodd" class="ydz_1jyli"/></g>`,
		"fallback": "healthicons:oesophagus-cancer",
	});
}

export default Component;
