import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hsan39mau.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hsan39mau"/>`,
		"fallback": "streamline-ultimate:laptop-download-bold",
	});
}

export default Component;
