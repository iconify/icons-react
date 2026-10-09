import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j4xw6ab6k.css';
import '../../css/x/xvdg5pbnh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j4xw6ab6k"/><path class="xvdg5pbnh"/>`,
		"fallback": "energy-icons:train-48",
	});
}

export default Component;
