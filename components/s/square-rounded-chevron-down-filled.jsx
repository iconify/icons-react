import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ypdj95b6c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ypdj95b6c"/>`,
		"fallback": "tabler:square-rounded-chevron-down-filled",
	});
}

export default Component;
