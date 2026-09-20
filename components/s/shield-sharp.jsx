import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/isrxau9wl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="isrxau9wl"/>`,
		"fallback": "pixelarticons:shield-sharp",
	});
}

export default Component;
