import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kfc0any_x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kfc0any_x"/>`,
		"fallback": "mdi:phone-keypad",
	});
}

export default Component;
