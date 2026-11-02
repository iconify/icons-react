import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kuogy9mlk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kuogy9mlk"/>`,
		"fallback": "mingcute:square-line",
	});
}

export default Component;
