import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i34d2sbfi.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i34d2sbfi"/>`,
		"fallback": "selfhst:visernic-light",
	});
}

export default Component;
