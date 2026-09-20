import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fw9qkp9ur.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fw9qkp9ur"/>`,
		"fallback": "mdi:movie-open-favorite-outline",
	});
}

export default Component;
