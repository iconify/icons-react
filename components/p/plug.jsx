import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y4a6xubvl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y4a6xubvl"/>`,
		"fallback": "pixelarticons:plug",
	});
}

export default Component;
