import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rnte2hbdx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rnte2hbdx"/>`,
		"fallback": "coolicons:trophy-fill-round",
	});
}

export default Component;
