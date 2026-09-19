import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j1zepsbez.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j1zepsbez"/>`,
		"fallback": "flat-color-icons:minus",
	});
}

export default Component;
