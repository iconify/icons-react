import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c_0r4ob-h.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c_0r4ob-h"/>`,
		"fallback": "streamline-block:nature-sun",
	});
}

export default Component;
