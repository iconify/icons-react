import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aub60qb-e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aub60qb-e"/>`,
		"fallback": "ri:scissors-cut-fill",
	});
}

export default Component;
