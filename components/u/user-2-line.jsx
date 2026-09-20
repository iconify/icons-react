import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iwf6w8c0f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iwf6w8c0f"/>`,
		"fallback": "mingcute:user-2-line",
	});
}

export default Component;
