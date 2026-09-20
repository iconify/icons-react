import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fyu5fkmwf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fyu5fkmwf"/>`,
		"fallback": "pixelarticons:message-arrow-left",
	});
}

export default Component;
