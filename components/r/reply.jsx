import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/il4lh3bym.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="il4lh3bym"/>`,
		"fallback": "ion:reply",
	});
}

export default Component;
