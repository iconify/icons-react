import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w9b65p45j.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w9b65p45j"/>`,
		"fallback": "la:play",
	});
}

export default Component;
