import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/znxl5ob6s.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="znxl5ob6s"/>`,
		"fallback": "fa6-solid:stroopwafel",
	});
}

export default Component;
