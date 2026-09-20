import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l5d7zvd5o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l5d7zvd5o"/>`,
		"fallback": "mdi:video-image",
	});
}

export default Component;
