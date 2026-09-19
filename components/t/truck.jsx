import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/en3yd4b4u.css';

const viewBox = {"width":1728,"height":1408};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="en3yd4b4u"/>`,
		"fallback": "fa:truck",
	});
}

export default Component;
