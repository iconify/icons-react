import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fusn3hbwb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fusn3hbwb"/>`,
		"fallback": "mdi:perspective-less",
	});
}

export default Component;
