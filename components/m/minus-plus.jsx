import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rovpu9_sx.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rovpu9_sx"/>`,
		"fallback": "carbon:minus-plus",
	});
}

export default Component;
