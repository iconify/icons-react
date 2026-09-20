import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vvwq-gb7i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vvwq-gb7i"/>`,
		"fallback": "mdi:sort-time-descending",
	});
}

export default Component;
