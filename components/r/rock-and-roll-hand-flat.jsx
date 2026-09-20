import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/op9wmfbkf.css';
import '../../css/j/jlyen3bpy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="op9wmfbkf"/><path clip-rule="evenodd" class="jlyen3bpy"/></g>`,
		"fallback": "streamline-sharp-color:rock-and-roll-hand-flat",
	});
}

export default Component;
