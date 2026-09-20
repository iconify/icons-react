import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cm5qftbjd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cm5qftbjd"/>`,
		"fallback": "pixelarticons:toggle-left",
	});
}

export default Component;
