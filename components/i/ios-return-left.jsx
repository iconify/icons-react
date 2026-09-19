import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ulk4puohh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ulk4puohh"/>`,
		"fallback": "ion:ios-return-left",
	});
}

export default Component;
