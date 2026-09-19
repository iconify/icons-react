import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q7_289hqs.css';

const viewBox = {"width":432,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q7_289hqs"/>`,
		"fallback": "zmdi:storage",
	});
}

export default Component;
