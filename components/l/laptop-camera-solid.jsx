import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iq8v6ibzh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="iq8v6ibzh"/>`,
		"fallback": "streamline-sharp:laptop-camera-solid",
	});
}

export default Component;
