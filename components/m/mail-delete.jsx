import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oqxl6yy8k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oqxl6yy8k"/>`,
		"fallback": "pixelarticons:mail-delete",
	});
}

export default Component;
