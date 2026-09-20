import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f86a2l21j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f86a2l21j"/>`,
		"fallback": "mdi:video-standard-definition",
	});
}

export default Component;
