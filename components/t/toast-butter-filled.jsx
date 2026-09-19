import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o7z5z-b0w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o7z5z-b0w"/>`,
		"fallback": "griddy-icons:toast-butter-filled",
	});
}

export default Component;
