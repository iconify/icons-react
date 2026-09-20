import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nua-p_ooz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nua-p_ooz"/>`,
		"fallback": "mdi:sticker-text-outline",
	});
}

export default Component;
