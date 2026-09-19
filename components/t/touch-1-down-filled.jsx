import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rp8-mcbwg.css';
import '../../css/n/nd-6u87gy.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rp8-mcbwg"/><path class="nd-6u87gy"/>`,
		"fallback": "carbon:touch-1-down-filled",
	});
}

export default Component;
