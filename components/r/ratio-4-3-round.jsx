import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/az_aflber.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="az_aflber"/>`,
		"fallback": "coolicons:ratio-4-3-round",
	});
}

export default Component;
