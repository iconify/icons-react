import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m17loqb1y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m17loqb1y"/>`,
		"fallback": "majesticons:noteblock-text-line",
	});
}

export default Component;
