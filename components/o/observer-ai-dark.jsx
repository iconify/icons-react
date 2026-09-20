import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ew2dh5b6e.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ew2dh5b6e"/>`,
		"fallback": "selfhst:observer-ai-dark",
	});
}

export default Component;
