import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipte8ubfi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ipte8ubfi"/>`,
		"fallback": "ri:progress-4-line",
	});
}

export default Component;
