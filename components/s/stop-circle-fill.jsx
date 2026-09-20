import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pr3vqhb6h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pr3vqhb6h"/>`,
		"fallback": "ri:stop-circle-fill",
	});
}

export default Component;
