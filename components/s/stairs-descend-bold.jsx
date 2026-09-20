import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rrw4lrb7s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rrw4lrb7s"/>`,
		"fallback": "streamline-ultimate:stairs-descend-bold",
	});
}

export default Component;
