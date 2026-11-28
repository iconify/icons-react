import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/izy7zr3ix.css';
import '../../css/v/va_ry5bgv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="izy7zr3ix"/><path class="va_ry5bgv"/></g>`,
		"fallback": "iconaut:metronome-solid",
	});
}

export default Component;
