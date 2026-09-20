import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fiondvx1z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fiondvx1z"/>`,
		"fallback": "uil:scroll-h",
	});
}

export default Component;
