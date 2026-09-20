import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/deww32buu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="deww32buu"/>`,
		"fallback": "solar:watch-square-outline",
	});
}

export default Component;
