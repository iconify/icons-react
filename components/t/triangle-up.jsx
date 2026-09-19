import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e3x85-t3w.css';

const viewBox = {"width":432,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e3x85-t3w"/>`,
		"fallback": "zmdi:triangle-up",
	});
}

export default Component;
