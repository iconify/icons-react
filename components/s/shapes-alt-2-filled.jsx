import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ttk8q5brf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ttk8q5brf"/>`,
		"fallback": "boxicons:shapes-alt-2-filled",
	});
}

export default Component;
