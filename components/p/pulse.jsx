import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p7ig1fb_f.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p7ig1fb_f"/>`,
		"fallback": "famicons:pulse",
	});
}

export default Component;
