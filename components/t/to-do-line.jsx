import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ltogj7x2g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ltogj7x2g"/>`,
		"fallback": "mingcute:to-do-line",
	});
}

export default Component;
