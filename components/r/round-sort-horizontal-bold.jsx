import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wdqm6cbey.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wdqm6cbey"/>`,
		"fallback": "solar:round-sort-horizontal-bold",
	});
}

export default Component;
