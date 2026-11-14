import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yg3eodb-t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yg3eodb-t"/>`,
		"fallback": "evicons:power-outage",
	});
}

export default Component;
