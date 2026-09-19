import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dvq7rx58k.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dvq7rx58k"/>`,
		"fallback": "fa6-solid:people-arrows",
	});
}

export default Component;
