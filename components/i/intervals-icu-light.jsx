import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/shcs-1hry.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="shcs-1hry"/>`,
		"fallback": "selfhst:intervals-icu-light",
	});
}

export default Component;
