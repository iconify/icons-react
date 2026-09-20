import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/ho8fg47mx.css';
import '../../css/x/x98phdbwu.css';
import '../../css/o/o6woyudfd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ho8fg47mx"/><path clip-rule="evenodd" class="x98phdbwu"/><path class="o6woyudfd"/></g>`,
		"fallback": "streamline-plump-color:video-close-captioning-flat",
	});
}

export default Component;
