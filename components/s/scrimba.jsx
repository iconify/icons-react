import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dh4-i6bue.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dh4-i6bue"/>`,
		"fallback": "thesvg-color:scrimba",
	});
}

export default Component;
