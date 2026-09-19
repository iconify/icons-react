import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fjk_cab6w.css';
import '../../css/u/u7j1z5bkd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fjk_cab6w"/><path class="u7j1z5bkd"/>`,
		"fallback": "boxicons:oven-filled",
	});
}

export default Component;
