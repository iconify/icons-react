import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jm_8cuu7z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jm_8cuu7z"/>`,
		"fallback": "noviair:password",
	});
}

export default Component;
