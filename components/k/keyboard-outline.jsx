import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fbww4uc3o.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fbww4uc3o"/>`,
		"fallback": "lsicon:keyboard-outline",
	});
}

export default Component;
