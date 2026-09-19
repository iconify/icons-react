import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ep9bmox7t.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ep9bmox7t"/>`,
		"fallback": "ion:ios-color-filter",
	});
}

export default Component;
