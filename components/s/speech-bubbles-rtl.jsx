import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v5df1egve.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v5df1egve"/>`,
		"fallback": "ooui:speech-bubbles-rtl",
	});
}

export default Component;
