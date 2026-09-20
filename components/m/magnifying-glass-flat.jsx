import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yok8bfbxv.css';
import '../../css/j/jaufztbtl.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yok8bfbxv"/><path clip-rule="evenodd" class="jaufztbtl"/></g>`,
		"fallback": "streamline-color:magnifying-glass-flat",
	});
}

export default Component;
