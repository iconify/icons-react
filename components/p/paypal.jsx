import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n87f4mb-u.css';

const viewBox = {"width":640,"height":850};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n87f4mb-u"/>`,
		"fallback": "il:paypal",
	});
}

export default Component;
