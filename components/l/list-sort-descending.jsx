import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cl1y2kbmx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cl1y2kbmx"/>`,
		"fallback": "lucide:list-sort-descending",
	});
}

export default Component;
