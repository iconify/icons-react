import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i36vu1bve.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i36vu1bve"/>`,
		"fallback": "ri:line-height-2",
	});
}

export default Component;
