import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oivh0m-4c.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oivh0m-4c"/>`,
		"fallback": "fa7-solid:poll-h",
	});
}

export default Component;
