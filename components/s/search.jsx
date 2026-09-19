import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e-5vzwbzx.css';

const viewBox = {"width":376,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e-5vzwbzx"/>`,
		"fallback": "zmdi:search",
	});
}

export default Component;
