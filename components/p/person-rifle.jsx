import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fd7ejgb1u.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fd7ejgb1u"/>`,
		"fallback": "fa7-solid:person-rifle",
	});
}

export default Component;
