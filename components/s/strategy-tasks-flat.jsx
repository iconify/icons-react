import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y083k1gja.css';
import '../../css/d/ddcjosbun.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="y083k1gja"/><path clip-rule="evenodd" class="ddcjosbun"/></g>`,
		"fallback": "streamline-color:strategy-tasks-flat",
	});
}

export default Component;
