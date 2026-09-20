import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lcdy8nbzz.css';

const viewBox = {"width":25,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lcdy8nbzz"/>`,
		"fallback": "lineicons:paint-roller-1",
	});
}

export default Component;
