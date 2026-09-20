import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oymyhruay.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oymyhruay"/>`,
		"fallback": "subway:pause-1",
	});
}

export default Component;
