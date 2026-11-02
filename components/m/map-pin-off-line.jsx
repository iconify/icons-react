import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nox5ngbqv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nox5ngbqv"/>`,
		"fallback": "mingcute:map-pin-off-line",
	});
}

export default Component;
