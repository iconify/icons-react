import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fmm9ddb9z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fmm9ddb9z"/>`,
		"fallback": "tabler:swipe-down",
	});
}

export default Component;
