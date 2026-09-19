import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c6o7nlbuj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c6o7nlbuj"/>`,
		"fallback": "ion:social-google-outline",
	});
}

export default Component;
