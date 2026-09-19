import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/la2sljsfo.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="la2sljsfo"/>`,
		"fallback": "at-icons:piano",
	});
}

export default Component;
