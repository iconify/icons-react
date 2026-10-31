import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e39-0ub8d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e39-0ub8d"/>`,
		"fallback": "coolicons:square-chevron-double-up-fill-round",
	});
}

export default Component;
