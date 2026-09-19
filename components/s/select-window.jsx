import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sixe4sxez.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sixe4sxez"/>`,
		"fallback": "carbon:select-window",
	});
}

export default Component;
