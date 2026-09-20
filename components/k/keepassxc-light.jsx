import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h7b2ktb8d.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h7b2ktb8d"/>`,
		"fallback": "selfhst:keepassxc-light",
	});
}

export default Component;
