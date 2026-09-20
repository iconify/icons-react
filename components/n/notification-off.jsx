import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qs7yqyb1l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qs7yqyb1l"/>`,
		"fallback": "pixelarticons:notification-off",
	});
}

export default Component;
