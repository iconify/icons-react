import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/di_c8abhj.css';
import '../../css/h/honwc8-_b.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="di_c8abhj"/><path clip-rule="evenodd" class="honwc8-_b"/></g>`,
		"fallback": "streamline-color:rock-and-roll-hand-flat",
	});
}

export default Component;
