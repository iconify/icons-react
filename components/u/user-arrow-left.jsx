import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h1ja69d7h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h1ja69d7h"/>`,
		"fallback": "mdi:user-arrow-left",
	});
}

export default Component;
