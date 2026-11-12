import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rfj02tbry.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rfj02tbry"/>`,
		"fallback": "tabler:users-check",
	});
}

export default Component;
