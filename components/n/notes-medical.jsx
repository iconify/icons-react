import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ucv6mt9cd.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ucv6mt9cd"/>`,
		"fallback": "fa7-solid:notes-medical",
	});
}

export default Component;
