import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t5o7gfw9f.css';

const viewBox = {"width":256,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t5o7gfw9f"/>`,
		"fallback": "zmdi:pause",
	});
}

export default Component;
