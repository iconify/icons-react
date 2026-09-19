import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ptlzc4fda.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ptlzc4fda"/>`,
		"fallback": "boxicons:mobile-alt-2-filled",
	});
}

export default Component;
