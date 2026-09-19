import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o3vz8-xpx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o3vz8-xpx"/>`,
		"fallback": "bxs:message-square-edit",
	});
}

export default Component;
