import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gis85s77z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gis85s77z"/>`,
		"fallback": "mdi:keyboard-esc",
	});
}

export default Component;
