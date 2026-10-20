import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yhnx-jb6c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yhnx-jb6c"/>`,
		"fallback": "lucide:letter-spacing",
	});
}

export default Component;
