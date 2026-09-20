import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ar-4_wh4i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ar-4_wh4i"/>`,
		"fallback": "simple-icons:tripdotcom",
	});
}

export default Component;
