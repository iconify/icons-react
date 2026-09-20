import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a2vbairmf.css';
import '../../css/n/nwkz17zmo.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="a2vbairmf"/><path clip-rule="evenodd" class="nwkz17zmo"/></g>`,
		"fallback": "streamline-color:video-swap-camera-flat",
	});
}

export default Component;
