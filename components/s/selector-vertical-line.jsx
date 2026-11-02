import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pdq01i_nj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pdq01i_nj"/>`,
		"fallback": "mingcute:selector-vertical-line",
	});
}

export default Component;
