import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/axs8swbmm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="axs8swbmm"/>`,
		"fallback": "streamline-ultimate:lock-unlock-4-bold",
	});
}

export default Component;
