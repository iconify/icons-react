import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ymt4b0b2h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ymt4b0b2h"/>`,
		"fallback": "pixelarticons:print",
	});
}

export default Component;
