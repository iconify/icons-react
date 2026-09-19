import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f335a1bdr.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f335a1bdr"/>`,
		"fallback": "cryptocurrency:slr",
	});
}

export default Component;
