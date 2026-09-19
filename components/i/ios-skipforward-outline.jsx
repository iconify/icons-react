import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hc-22ebky.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hc-22ebky"/>`,
		"fallback": "ion:ios-skipforward-outline",
	});
}

export default Component;
