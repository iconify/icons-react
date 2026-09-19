import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/youkbbcbw.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cls-1 youkbbcbw"/>`,
		"fallback": "formkit:twitter",
	});
}

export default Component;
