import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x2rld1b5y.css';
import '../../css/f/fgkmzh3sd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="x2rld1b5y"/><path class="fgkmzh3sd"/></g>`,
		"fallback": "tdesign:task-time",
	});
}

export default Component;
