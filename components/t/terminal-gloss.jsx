import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rk9e17sjm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rk9e17sjm"/>`,
		"fallback": "withicons:terminal-gloss",
	});
}

export default Component;
