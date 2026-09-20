import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gd4oy6b3s.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gd4oy6b3s"/>`,
		"fallback": "subway:move-2",
	});
}

export default Component;
