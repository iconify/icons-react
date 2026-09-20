import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c525xyy-d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="c525xyy-d"/>`,
		"fallback": "solar:music-note-slider-2-bold",
	});
}

export default Component;
