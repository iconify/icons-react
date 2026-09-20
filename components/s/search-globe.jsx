import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l_hr8qb4x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l_hr8qb4x"/>`,
		"fallback": "mdi:search-globe",
	});
}

export default Component;
