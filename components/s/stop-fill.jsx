import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jsodg2gky.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jsodg2gky"/>`,
		"fallback": "keyline-icons:stop-fill",
	});
}

export default Component;
