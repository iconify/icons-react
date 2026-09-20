import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rk-a-0bdk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rk-a-0bdk"/>`,
		"fallback": "pixelarticons:square-dashed-cursor",
	});
}

export default Component;
