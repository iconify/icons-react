import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x27tik33z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x27tik33z"/>`,
		"fallback": "streamline-ultimate:screen-bold",
	});
}

export default Component;
