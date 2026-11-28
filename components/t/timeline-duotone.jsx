import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/udwgbejas.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="primary udwgbejas"/>`,
		"fallback": "iconaut:timeline-duotone",
	});
}

export default Component;
