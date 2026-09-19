import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n2z9bdfzm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n2z9bdfzm"/>`,
		"fallback": "ion:social-tumblr-outline",
	});
}

export default Component;
