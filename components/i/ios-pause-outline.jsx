import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cd01kcbfz.css';
import '../../css/n/nzce9ndyg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cd01kcbfz"/><path class="nzce9ndyg"/>`,
		"fallback": "ion:ios-pause-outline",
	});
}

export default Component;
