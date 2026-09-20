import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hi60ecbmb.css';

const viewBox = {"width":30,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hi60ecbmb"/>`,
		"fallback": "wi:time-9",
	});
}

export default Component;
