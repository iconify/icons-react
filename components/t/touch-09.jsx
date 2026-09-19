import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sp2x8y2ra.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sp2x8y2ra"/>`,
		"fallback": "hugeicons:touch-09",
	});
}

export default Component;
