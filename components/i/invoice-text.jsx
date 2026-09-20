import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vejx1kb1j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vejx1kb1j"/>`,
		"fallback": "mdi:invoice-text",
	});
}

export default Component;
