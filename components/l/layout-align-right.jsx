import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/roylc0i0s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="roylc0i0s"/>`,
		"fallback": "pixelarticons:layout-align-right",
	});
}

export default Component;
