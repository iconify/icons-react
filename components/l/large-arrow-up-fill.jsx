import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ex5dnbc5f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ex5dnbc5f"/>`,
		"fallback": "mingcute:large-arrow-up-fill",
	});
}

export default Component;
