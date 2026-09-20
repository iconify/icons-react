import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f46i-9g8k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f46i-9g8k"/>`,
		"fallback": "thesvg-color:phpstan",
	});
}

export default Component;
