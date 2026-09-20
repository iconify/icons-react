import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wdqf3qgok.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wdqf3qgok"/>`,
		"fallback": "thesvg-color:lastdotfm",
	});
}

export default Component;
