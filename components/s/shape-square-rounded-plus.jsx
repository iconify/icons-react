import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/last7kb4n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="last7kb4n"/>`,
		"fallback": "mdi:shape-square-rounded-plus",
	});
}

export default Component;
