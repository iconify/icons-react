import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ua-shzb5e.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ua-shzb5e"/>`,
		"fallback": "fxemoji:uppointingredtriangle",
	});
}

export default Component;
