import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ps-napbqh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ps-napbqh"/>`,
		"fallback": "solar:watch-square-minimalistic-outline",
	});
}

export default Component;
