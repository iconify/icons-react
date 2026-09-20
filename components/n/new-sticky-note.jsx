import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/e/e5tok3bkk.css';
import '../../css/g/gaonsmbbz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="e5tok3bkk"/><path class="gaonsmbbz"/></g>`,
		"fallback": "streamline-sharp:new-sticky-note",
	});
}

export default Component;
