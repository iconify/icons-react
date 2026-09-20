import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ltmuz0bob.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ltmuz0bob"/>`,
		"fallback": "typcn:puzzle-outline",
	});
}

export default Component;
