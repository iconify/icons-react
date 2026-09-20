import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uv92jsiur.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uv92jsiur"/>`,
		"fallback": "selfhst:nextcloud-contacts-dark",
	});
}

export default Component;
