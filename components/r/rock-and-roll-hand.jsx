import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ebo-zabye.css';
import '../../css/e/eckkriuue.css';
import '../../css/j/j34hyzbal.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ebo-zabye"/><path class="eckkriuue"/><path class="j34hyzbal"/></g>`,
		"fallback": "streamline-color:rock-and-roll-hand",
	});
}

export default Component;
