import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bkm0tz84w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bkm0tz84w"/>`,
		"fallback": "mdi:invert-colors-off",
	});
}

export default Component;
