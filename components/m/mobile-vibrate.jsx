import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y8fnc4bsx.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y8fnc4bsx"/>`,
		"fallback": "fa7-solid:mobile-vibrate",
	});
}

export default Component;
