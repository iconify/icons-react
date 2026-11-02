import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cknplebfe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cknplebfe"/>`,
		"fallback": "mingcute:numbers-90-sort-descending-fill",
	});
}

export default Component;
