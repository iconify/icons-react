import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fp-r0nz9w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fp-r0nz9w"/>`,
		"fallback": "mdi:toy-brick-plus-outline",
	});
}

export default Component;
