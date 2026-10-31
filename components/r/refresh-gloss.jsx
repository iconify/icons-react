import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ep8-spb7m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ep8-spb7m"/>`,
		"fallback": "withicons:refresh-gloss",
	});
}

export default Component;
