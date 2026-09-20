import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p_0a73rtr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p_0a73rtr"/>`,
		"fallback": "lucide:pyramid",
	});
}

export default Component;
