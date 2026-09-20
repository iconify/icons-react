import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pp3l5agqt.css';
import '../../css/w/w0pyaebkk.css';
import '../../css/p/p1rutmbfw.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pp3l5agqt"/><path clip-rule="evenodd" class="w0pyaebkk"/><path class="p1rutmbfw"/></g>`,
		"fallback": "streamline-color:make-up-brush-flat",
	});
}

export default Component;
