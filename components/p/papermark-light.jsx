import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j7a83obev.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j7a83obev"/>`,
		"fallback": "selfhst:papermark-light",
	});
}

export default Component;
