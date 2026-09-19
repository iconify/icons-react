import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vefif0bcp.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vefif0bcp"/>`,
		"fallback": "cib:swift",
	});
}

export default Component;
