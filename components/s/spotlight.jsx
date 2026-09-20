import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uge_j_b0w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uge_j_b0w"/>`,
		"fallback": "pixelarticons:spotlight",
	});
}

export default Component;
