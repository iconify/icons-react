import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yf0f2gbhv.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yf0f2gbhv"/>`,
		"fallback": "icons8:rotate-left",
	});
}

export default Component;
