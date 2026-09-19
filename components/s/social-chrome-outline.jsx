import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f_vranuey.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f_vranuey"/>`,
		"fallback": "ion:social-chrome-outline",
	});
}

export default Component;
