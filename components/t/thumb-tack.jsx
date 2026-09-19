import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i6a1ky2xl.css';

const viewBox = {"width":1152,"height":1664};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i6a1ky2xl"/>`,
		"fallback": "fa:thumb-tack",
	});
}

export default Component;
