import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fi2vt_c1t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fi2vt_c1t"/>`,
		"fallback": "pixelarticons:message",
	});
}

export default Component;
