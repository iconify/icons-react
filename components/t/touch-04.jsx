import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oun3kebky.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oun3kebky"/>`,
		"fallback": "hugeicons:touch-04",
	});
}

export default Component;
