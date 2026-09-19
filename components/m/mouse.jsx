import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dnh6lfzed.css';
import '../../css/w/wax2jmrhx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dnh6lfzed"/><path class="wax2jmrhx"/>`,
		"fallback": "bx:mouse",
	});
}

export default Component;
