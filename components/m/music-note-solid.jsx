import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ohuw2cbls.css';
import '../../css/x/xk5mwgbgf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ohuw2cbls"/><path class="xk5mwgbgf"/></g>`,
		"fallback": "iconoir:music-note-solid",
	});
}

export default Component;
