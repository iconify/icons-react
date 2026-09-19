import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r9kyeodza.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r9kyeodza"/>`,
		"fallback": "circum:stop-1",
	});
}

export default Component;
