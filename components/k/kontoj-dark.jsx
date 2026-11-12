import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vlgf8l19l.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vlgf8l19l"/>`,
		"fallback": "selfhst:kontoj-dark",
	});
}

export default Component;
