import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h3hbdgbro.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h3hbdgbro"/>`,
		"fallback": "selfhst:iplayarr-light",
	});
}

export default Component;
