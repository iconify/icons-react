import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vukmy-a0n.css';

const viewBox = {"width":11,"height":11};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vukmy-a0n"/>`,
		"fallback": "maki:volcano-11",
	});
}

export default Component;
