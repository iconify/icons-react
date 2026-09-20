import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/umrigur1z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="umrigur1z"/>`,
		"fallback": "keyline-icons:thumbs-down-fill",
	});
}

export default Component;
