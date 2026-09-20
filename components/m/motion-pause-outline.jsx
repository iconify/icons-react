import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wc6mrcy9h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wc6mrcy9h"/>`,
		"fallback": "mdi:motion-pause-outline",
	});
}

export default Component;
