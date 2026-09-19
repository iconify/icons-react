import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fi4k0l1-n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fi4k0l1-n"/>`,
		"fallback": "boxicons:tickets-filled",
	});
}

export default Component;
