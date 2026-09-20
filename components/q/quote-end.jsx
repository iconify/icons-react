import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/maa29hsla.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="maa29hsla"/>`,
		"fallback": "keyline-icons:quote-end",
	});
}

export default Component;
