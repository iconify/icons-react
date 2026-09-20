import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u72l21blo.css';

const viewBox = {"width":40,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u72l21blo"/>`,
		"fallback": "iwwa:square-root",
	});
}

export default Component;
