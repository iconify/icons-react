import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ie82q_bck.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ie82q_bck"/>`,
		"fallback": "boxicons:luggage",
	});
}

export default Component;
