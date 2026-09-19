import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wee0a9bau.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wee0a9bau"/>`,
		"fallback": "ion:ios-at-outline",
	});
}

export default Component;
