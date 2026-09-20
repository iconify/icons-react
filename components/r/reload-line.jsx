import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gpfpg0b7i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gpfpg0b7i"/>`,
		"fallback": "majesticons:reload-line",
	});
}

export default Component;
