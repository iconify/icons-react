import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hgc8pk4bh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hgc8pk4bh"/>`,
		"fallback": "mdi:send-variant-clock",
	});
}

export default Component;
