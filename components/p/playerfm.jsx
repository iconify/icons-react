import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g5t5qvb1e.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g5t5qvb1e"/>`,
		"fallback": "cib:playerfm",
	});
}

export default Component;
