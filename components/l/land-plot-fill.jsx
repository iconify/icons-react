import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ti3jsoj7z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ti3jsoj7z"/>`,
		"fallback": "mingcute:land-plot-fill",
	});
}

export default Component;
