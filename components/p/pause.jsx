import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ryht7gr-d.css';

const viewBox = {"width":1200,"height":1200};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ryht7gr-d"/>`,
		"fallback": "el:pause",
	});
}

export default Component;
