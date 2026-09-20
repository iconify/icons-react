import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dcuc76lyo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dcuc76lyo"/>`,
		"fallback": "pixelarticons:tab",
	});
}

export default Component;
