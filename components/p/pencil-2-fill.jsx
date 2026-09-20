import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aib1ujbqa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aib1ujbqa"/>`,
		"fallback": "mingcute:pencil-2-fill",
	});
}

export default Component;
