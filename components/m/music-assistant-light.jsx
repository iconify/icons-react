import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/la_4ipbyp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="la_4ipbyp"/>`,
		"fallback": "selfhst:music-assistant-light",
	});
}

export default Component;
