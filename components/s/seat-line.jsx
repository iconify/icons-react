import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fvq4241xz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fvq4241xz"/>`,
		"fallback": "mingcute:seat-line",
	});
}

export default Component;
