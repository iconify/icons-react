import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bhnkr-b6o.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bhnkr-b6o"/>`,
		"fallback": "lineicons:laptop",
	});
}

export default Component;
