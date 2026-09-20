import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipb_7ybiq.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ipb_7ybiq"/>`,
		"fallback": "roentgen:toy-horse",
	});
}

export default Component;
