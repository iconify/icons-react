import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y5axs6bmz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y5axs6bmz"/>`,
		"fallback": "mdi:link-box-variant",
	});
}

export default Component;
