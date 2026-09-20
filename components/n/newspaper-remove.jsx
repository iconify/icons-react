import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rov56qb4h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rov56qb4h"/>`,
		"fallback": "mdi:newspaper-remove",
	});
}

export default Component;
