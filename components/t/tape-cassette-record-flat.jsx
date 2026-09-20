import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fs93ml2-w.css';
import '../../css/y/yrnpk4b6e.css';
import '../../css/j/jjlp30v-w.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="fs93ml2-w"/><path clip-rule="evenodd" class="yrnpk4b6e"/><path class="jjlp30v-w"/></g>`,
		"fallback": "streamline-color:tape-cassette-record-flat",
	});
}

export default Component;
