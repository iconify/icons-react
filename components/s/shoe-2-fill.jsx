import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e7tbu7-pl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e7tbu7-pl"/>`,
		"fallback": "mingcute:shoe-2-fill",
	});
}

export default Component;
