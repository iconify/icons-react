import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k6njk97az.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k6njk97az"/>`,
		"fallback": "mingcute:progress-75-fill",
	});
}

export default Component;
