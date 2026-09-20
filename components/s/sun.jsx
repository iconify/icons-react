import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/buaxhbt4x.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="buaxhbt4x"/>`,
		"fallback": "wpf:sun",
	});
}

export default Component;
