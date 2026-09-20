import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y_3dkcbrm.css';
import '../../css/m/mvx8mts3b.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="y_3dkcbrm"/><path class="mvx8mts3b"/></g>`,
		"fallback": "streamline-flex-color:story-post",
	});
}

export default Component;
