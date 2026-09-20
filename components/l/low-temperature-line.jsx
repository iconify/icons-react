import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zlrh-ubaa.css';
import '../../css/u/u13yqv0ps.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zlrh-ubaa"/><path class="u13yqv0ps"/>`,
		"fallback": "mingcute:low-temperature-line",
	});
}

export default Component;
