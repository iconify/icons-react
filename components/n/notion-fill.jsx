import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uw_-10c8c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uw_-10c8c"/>`,
		"fallback": "ri:notion-fill",
	});
}

export default Component;
