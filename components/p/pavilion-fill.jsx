import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/laf5ffyjr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="laf5ffyjr"/>`,
		"fallback": "mingcute:pavilion-fill",
	});
}

export default Component;
