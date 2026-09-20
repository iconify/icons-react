import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uys6emowx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uys6emowx"/>`,
		"fallback": "selfhst:tp-link-light",
	});
}

export default Component;
