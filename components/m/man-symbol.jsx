import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t0a4cl85x.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t0a4cl85x"/>`,
		"fallback": "streamline-color:man-symbol",
	});
}

export default Component;
