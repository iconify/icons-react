import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/obxa5ggcr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="obxa5ggcr"/>`,
		"fallback": "keyline-icons:square-arrow-right-sharp-fill",
	});
}

export default Component;
