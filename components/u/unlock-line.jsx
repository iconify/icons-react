import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j-mm7tj2i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j-mm7tj2i"/>`,
		"fallback": "mingcute:unlock-line",
	});
}

export default Component;
