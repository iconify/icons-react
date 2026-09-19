import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u66q5t6jj.css';

const viewBox = {"width":368,"height":432};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u66q5t6jj"/>`,
		"fallback": "zmdi:notifications-none",
	});
}

export default Component;
