import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hvdz7j8kl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hvdz7j8kl"/>`,
		"fallback": "mingcute:registered-line",
	});
}

export default Component;
