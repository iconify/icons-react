import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ntc5j9rdg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ntc5j9rdg"/>`,
		"fallback": "mdi:tune-vertical",
	});
}

export default Component;
