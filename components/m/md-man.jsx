import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w5592g8sw.css';
import '../../css/p/pemo8gb-k.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w5592g8sw"/><path class="pemo8gb-k"/>`,
		"fallback": "ion:md-man",
	});
}

export default Component;
