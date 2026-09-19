import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/crhxl_b4h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="crhxl_b4h"/>`,
		"fallback": "circum:sticky-note",
	});
}

export default Component;
