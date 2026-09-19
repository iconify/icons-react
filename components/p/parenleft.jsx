import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e4i38ybpd.css';

const viewBox = {"width":182,"height":981};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e4i38ybpd"/>`,
		"fallback": "ls:parenleft",
	});
}

export default Component;
