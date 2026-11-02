import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ihb73o3yc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ihb73o3yc"/>`,
		"fallback": "mingcute:palette-line",
	});
}

export default Component;
