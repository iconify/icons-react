import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k95bcub3x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="k95bcub3x"/>`,
		"fallback": "keyline-icons:laptop-fill",
	});
}

export default Component;
