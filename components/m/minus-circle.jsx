import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iaqkji9ew.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iaqkji9ew"/>`,
		"fallback": "bxs:minus-circle",
	});
}

export default Component;
