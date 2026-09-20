import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/da1c7fbic.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="da1c7fbic"/>`,
		"fallback": "ix:truck-filled",
	});
}

export default Component;
