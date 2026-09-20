import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jhn1d58yx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jhn1d58yx"/>`,
		"fallback": "mdi:skull-scan-outline",
	});
}

export default Component;
