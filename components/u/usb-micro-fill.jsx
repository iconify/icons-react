import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b1yn72bqr.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b1yn72bqr"/>`,
		"fallback": "bi:usb-micro-fill",
	});
}

export default Component;
