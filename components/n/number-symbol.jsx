import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i8xjjj8ja.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i8xjjj8ja"/>`,
		"fallback": "fluent-mdl2:number-symbol",
	});
}

export default Component;
