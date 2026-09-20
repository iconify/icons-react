import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uht0ciboz.css';
import '../../css/y/ydcqa0qwf.css';
import '../../css/x/x2x-4jbhp.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="uht0ciboz"/><path class="ydcqa0qwf"/><path class="x2x-4jbhp"/></g>`,
		"fallback": "streamline-color:tag-alt",
	});
}

export default Component;
