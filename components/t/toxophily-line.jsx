import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oeo0uab8a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oeo0uab8a"/>`,
		"fallback": "mingcute:toxophily-line",
	});
}

export default Component;
