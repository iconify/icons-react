import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gl4uohhkk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gl4uohhkk"/>`,
		"fallback": "fa6-solid:magnifying-glass-arrow-right",
	});
}

export default Component;
