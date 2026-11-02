import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eclf4bb-e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eclf4bb-e"/>`,
		"fallback": "mingcute:land-plot-line",
	});
}

export default Component;
