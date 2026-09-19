import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r8kir8brf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r8kir8brf"/>`,
		"fallback": "boxicons:search-big-code-filled",
	});
}

export default Component;
