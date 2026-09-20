import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wbtzlbb3u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wbtzlbb3u"/>`,
		"fallback": "keyline-icons:shield-plus-sharp",
	});
}

export default Component;
