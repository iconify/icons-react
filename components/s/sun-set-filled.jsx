import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g8m0hfx1w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g8m0hfx1w"/>`,
		"fallback": "boxicons:sun-set-filled",
	});
}

export default Component;
