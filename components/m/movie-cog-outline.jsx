import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u8y5xtl8o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u8y5xtl8o"/>`,
		"fallback": "mdi:movie-cog-outline",
	});
}

export default Component;
