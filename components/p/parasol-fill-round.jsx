import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j3ltlzz3h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j3ltlzz3h"/>`,
		"fallback": "coolicons:parasol-fill-round",
	});
}

export default Component;
