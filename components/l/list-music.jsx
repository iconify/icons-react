import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vkm48071l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vkm48071l"/>`,
		"fallback": "keyline-icons:list-music",
	});
}

export default Component;
