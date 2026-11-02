import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gfp-t12yn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gfp-t12yn"/>`,
		"fallback": "mingcute:search-fill",
	});
}

export default Component;
