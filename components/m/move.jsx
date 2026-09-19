import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oqh5nbc3x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oqh5nbc3x"/>`,
		"fallback": "boxicons:move",
	});
}

export default Component;
