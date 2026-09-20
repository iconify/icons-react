import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a63_o0bux.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a63_o0bux"/>`,
		"fallback": "system-uicons:speech-bubble",
	});
}

export default Component;
