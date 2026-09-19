import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/iy3rf6ewf.css';
import '../../css/m/m8wbj0b5b.css';
import '../../css/y/y63x79b_x.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="iy3rf6ewf"/><path class="m8wbj0b5b"/><path clip-rule="evenodd" class="y63x79b_x"/></g>`,
		"fallback": "fluent-emoji-flat:rightwards-pushing-hand",
	});
}

export default Component;
