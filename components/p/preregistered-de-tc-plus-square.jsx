import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l89tdqbvo.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l89tdqbvo"/>`,
		"fallback": "academicons:preregistered-de-tc-plus-square",
	});
}

export default Component;
