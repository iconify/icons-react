import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ydq3irb0u.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ydq3irb0u"/>`,
		"fallback": "pinhead:s",
	});
}

export default Component;
