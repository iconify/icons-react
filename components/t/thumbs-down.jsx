import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dfg6x-0ty.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dfg6x-0ty"/>`,
		"fallback": "mdi:thumbs-down",
	});
}

export default Component;
