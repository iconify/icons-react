import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j6ljd6b-u.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j6ljd6b-u"/>`,
		"fallback": "la:user-alt-slash-solid",
	});
}

export default Component;
