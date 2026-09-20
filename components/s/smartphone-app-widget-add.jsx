import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ispw56eac.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ispw56eac"/>`,
		"fallback": "streamline-freehand:smartphone-app-widget-add",
	});
}

export default Component;
