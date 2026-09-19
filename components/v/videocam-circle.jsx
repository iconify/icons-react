import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n-6w0qb7o.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n-6w0qb7o"/>`,
		"fallback": "f7:videocam-circle",
	});
}

export default Component;
