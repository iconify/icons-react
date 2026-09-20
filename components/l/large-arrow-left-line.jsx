import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ki4-hdcdf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ki4-hdcdf"/>`,
		"fallback": "mingcute:large-arrow-left-line",
	});
}

export default Component;
