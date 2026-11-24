import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iv62zlbwh.css';
import '../../css/r/rpzzz8b2e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iv62zlbwh"/><path class="rpzzz8b2e"/>`,
		"fallback": "lucide-extended:satellite-dish-filled",
	});
}

export default Component;
