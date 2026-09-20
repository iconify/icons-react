import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ur41y1but.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ur41y1but"/>`,
		"fallback": "keyline-icons:test-tubes",
	});
}

export default Component;
