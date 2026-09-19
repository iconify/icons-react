import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oll7jobqn.css';

const viewBox = {"width":456,"height":464};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oll7jobqn"/>`,
		"fallback": "zmdi:rotate-cw",
	});
}

export default Component;
