import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rdt07-esp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rdt07-esp"/>`,
		"fallback": "withicons:send-horizontal-gloss",
	});
}

export default Component;
