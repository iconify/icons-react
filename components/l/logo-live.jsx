import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c6hh-zbjb.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c6hh-zbjb"/>`,
		"fallback": "fad:logo-live",
	});
}

export default Component;
