import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cw-dtcbmo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cw-dtcbmo"/>`,
		"fallback": "tabler:users-exclamation",
	});
}

export default Component;
