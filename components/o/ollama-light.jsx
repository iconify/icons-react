import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufa1labba.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ufa1labba"/>`,
		"fallback": "selfhst:ollama-light",
	});
}

export default Component;
