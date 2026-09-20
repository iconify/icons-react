import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pgu_4qbvm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pgu_4qbvm"/>`,
		"fallback": "mdi:tempo",
	});
}

export default Component;
