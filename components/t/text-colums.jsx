import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tqtbq1bpl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tqtbq1bpl"/>`,
		"fallback": "pixelarticons:text-colums",
	});
}

export default Component;
