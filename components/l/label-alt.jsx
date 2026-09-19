import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vfq-i7j7o.css';

const viewBox = {"width":408,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vfq-i7j7o"/>`,
		"fallback": "zmdi:label-alt",
	});
}

export default Component;
