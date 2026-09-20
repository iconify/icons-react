import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f_y1646an.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f_y1646an"/>`,
		"fallback": "streamline-block:shopping-discount",
	});
}

export default Component;
