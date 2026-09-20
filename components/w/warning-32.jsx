import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uo8189bjo.css';
import '../../css/v/v0h1tybbc.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uo8189bjo"/><path clip-rule="evenodd" class="v0h1tybbc"/>`,
		"fallback": "qlementine-icons:warning-32",
	});
}

export default Component;
