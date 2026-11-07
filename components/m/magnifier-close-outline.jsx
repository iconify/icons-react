import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wmcky1b9o.css';
import '../../css/v/vyk6wnbgi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wmcky1b9o"/><path clip-rule="evenodd" class="vyk6wnbgi"/>`,
		"fallback": "solar:magnifier-close-outline",
	});
}

export default Component;
