import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q5sk9tbtl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q5sk9tbtl"/>`,
		"fallback": "mdi:view-list-outline",
	});
}

export default Component;
