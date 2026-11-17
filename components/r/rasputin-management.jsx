import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ivd6g4r7h.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ivd6g4r7h"/>`,
		"fallback": "selfhst:rasputin-management",
	});
}

export default Component;
