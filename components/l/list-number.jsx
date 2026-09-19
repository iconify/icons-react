import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mx3iejahs.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mx3iejahs"/>`,
		"fallback": "foundation:list-number",
	});
}

export default Component;
