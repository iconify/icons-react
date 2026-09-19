import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c6u8fjbqz.css';

const viewBox = {"width":408,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c6u8fjbqz"/>`,
		"fallback": "zmdi:trending-flat",
	});
}

export default Component;
