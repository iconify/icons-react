import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yaldc9bwb.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yaldc9bwb"/>`,
		"fallback": "la:video",
	});
}

export default Component;
