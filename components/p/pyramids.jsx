import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j8z2b9b4s.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j8z2b9b4s"/>`,
		"fallback": "lineicons:pyramids",
	});
}

export default Component;
