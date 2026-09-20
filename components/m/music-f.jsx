import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v2-3o1b3b.css';

const viewBox = {"width":24,"height":24,"left":-7,"top":-1.5};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v2-3o1b3b"/>`,
		"fallback": "jam:music-f",
	});
}

export default Component;
