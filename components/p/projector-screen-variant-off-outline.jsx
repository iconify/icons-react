import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/znscakbjn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="znscakbjn"/>`,
		"fallback": "mdi:projector-screen-variant-off-outline",
	});
}

export default Component;
