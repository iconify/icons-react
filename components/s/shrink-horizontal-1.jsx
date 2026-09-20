import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u6k_3kb4e.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u6k_3kb4e"/>`,
		"fallback": "streamline:shrink-horizontal-1",
	});
}

export default Component;
