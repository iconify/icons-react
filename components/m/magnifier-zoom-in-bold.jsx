import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sr0xqpt6u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="sr0xqpt6u"/>`,
		"fallback": "solar:magnifier-zoom-in-bold",
	});
}

export default Component;
