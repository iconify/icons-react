import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nfdkbab2u.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nfdkbab2u"/>`,
		"fallback": "streamline-color:wave-signal",
	});
}

export default Component;
