import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cbz9xohyj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cbz9xohyj"/>`,
		"fallback": "si:monitor-check-line",
	});
}

export default Component;
