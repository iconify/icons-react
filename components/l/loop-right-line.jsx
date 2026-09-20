import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ra5khdb3n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ra5khdb3n"/>`,
		"fallback": "ri:loop-right-line",
	});
}

export default Component;
