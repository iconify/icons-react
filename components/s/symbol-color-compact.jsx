import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p-6urxbue.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p-6urxbue"/>`,
		"fallback": "codicon:symbol-color-compact",
	});
}

export default Component;
