import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nnw8g3zvc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nnw8g3zvc"/>`,
		"fallback": "mingcute:pray-line",
	});
}

export default Component;
