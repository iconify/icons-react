import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/odvnyb7mh.css';

const viewBox = {"width":368,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="odvnyb7mh"/>`,
		"fallback": "zmdi:view-column",
	});
}

export default Component;
