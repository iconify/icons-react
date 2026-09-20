import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rg8m7tbjz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rg8m7tbjz"/>`,
		"fallback": "mingcute:layout-leftbar-close-fill",
	});
}

export default Component;
