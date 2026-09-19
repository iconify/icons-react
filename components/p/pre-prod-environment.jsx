import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y-5fuebxe.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y-5fuebxe"/>`,
		"fallback": "carbon:pre-prod-environment",
	});
}

export default Component;
