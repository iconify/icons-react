import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dnl6s70sd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dnl6s70sd"/>`,
		"fallback": "game-icons:pteruges",
	});
}

export default Component;
