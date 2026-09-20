import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jo5ufz-lm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jo5ufz-lm"/>`,
		"fallback": "mdi:layers",
	});
}

export default Component;
