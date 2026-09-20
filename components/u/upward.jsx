import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j5joxus6d.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j5joxus6d"/>`,
		"fallback": "system-uicons:upward",
	});
}

export default Component;
