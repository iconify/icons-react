import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f0a1o5sny.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f0a1o5sny"/>`,
		"fallback": "famicons:logo-laravel",
	});
}

export default Component;
