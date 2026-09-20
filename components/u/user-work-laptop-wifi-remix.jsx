import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y4h3mqyon.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="y4h3mqyon"/>`,
		"fallback": "streamline-sharp:user-work-laptop-wifi-remix",
	});
}

export default Component;
