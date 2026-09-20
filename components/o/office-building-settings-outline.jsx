import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jo7mvpg8y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jo7mvpg8y"/>`,
		"fallback": "mdi:office-building-settings-outline",
	});
}

export default Component;
