import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zq-co7oys.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zq-co7oys"/>`,
		"fallback": "la:subscript-solid",
	});
}

export default Component;
