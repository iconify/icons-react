import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a7t63ub0t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a7t63ub0t"/>`,
		"fallback": "ri:product-hunt-line",
	});
}

export default Component;
