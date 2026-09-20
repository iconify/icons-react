import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/if5jybchv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="if5jybchv"/>`,
		"fallback": "selfhst:java-light",
	});
}

export default Component;
