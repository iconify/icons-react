import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zy9yyucwb.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zy9yyucwb"/>`,
		"fallback": "carbon:pan-horizontal",
	});
}

export default Component;
