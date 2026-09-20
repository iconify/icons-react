import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c88hzmb3z.css';
import '../../css/v/vx1-62bbe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="c88hzmb3z"/><path class="vx1-62bbe"/></g>`,
		"fallback": "lets-icons:mic-fill",
	});
}

export default Component;
