import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qb08p0b6z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qb08p0b6z"/>`,
		"fallback": "pixelarticons:suitcase",
	});
}

export default Component;
