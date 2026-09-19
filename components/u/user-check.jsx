import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fu_owfbwy.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fu_owfbwy"/>`,
		"fallback": "fa7-solid:user-check",
	});
}

export default Component;
