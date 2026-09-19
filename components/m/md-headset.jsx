import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j--st9bsb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j--st9bsb"/>`,
		"fallback": "ion:md-headset",
	});
}

export default Component;
