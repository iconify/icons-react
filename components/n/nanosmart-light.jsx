import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ogni7k6ve.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ogni7k6ve"/>`,
		"fallback": "selfhst:nanosmart-light",
	});
}

export default Component;
