import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kwg6j3_ui.css';
import '../../css/h/h5y82zm2b.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="kwg6j3_ui"/><path class="h5y82zm2b"/></g>`,
		"fallback": "at-icons:sheep",
	});
}

export default Component;
