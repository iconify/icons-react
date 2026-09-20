import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/epf5evbal.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="epf5evbal"/>`,
		"fallback": "streamline-block:nature-moon",
	});
}

export default Component;
