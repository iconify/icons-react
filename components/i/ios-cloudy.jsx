import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uiktcnb2e.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uiktcnb2e"/>`,
		"fallback": "ion:ios-cloudy",
	});
}

export default Component;
