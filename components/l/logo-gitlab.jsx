import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ylb0d8b0b.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ylb0d8b0b"/>`,
		"fallback": "carbon:logo-gitlab",
	});
}

export default Component;
