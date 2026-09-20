import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q3ilmxi3y.css';
import '../../css/d/d010g9jvr.css';
import '../../css/c/c8cea9ohy.css';
import '../../css/t/thev6zbxi.css';
import '../../css/j/jsih-6bwg.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="q3ilmxi3y"/><path class="d010g9jvr"/><path class="c8cea9ohy"/><path class="thev6zbxi"/><path class="jsih-6bwg"/></g>`,
		"fallback": "streamline-flex-color:record-player",
	});
}

export default Component;
