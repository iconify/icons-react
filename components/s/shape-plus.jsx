import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tiyci0bhy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tiyci0bhy"/>`,
		"fallback": "mdi:shape-plus",
	});
}

export default Component;
