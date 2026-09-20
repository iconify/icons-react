import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v1_7w4pyv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v1_7w4pyv"/>`,
		"fallback": "mdi:view-grid",
	});
}

export default Component;
