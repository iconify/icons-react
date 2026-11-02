import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/horh00byn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="horh00byn"/>`,
		"fallback": "mingcute:line-app-line",
	});
}

export default Component;
