import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vkh7o7b5l.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vkh7o7b5l"/>`,
		"fallback": "selfhst:voux-light",
	});
}

export default Component;
