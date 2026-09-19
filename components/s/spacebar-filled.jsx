import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rutj5objf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rutj5objf"/>`,
		"fallback": "boxicons:spacebar-filled",
	});
}

export default Component;
