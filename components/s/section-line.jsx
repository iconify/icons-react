import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qci7j6b5i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qci7j6b5i"/>`,
		"fallback": "mingcute:section-line",
	});
}

export default Component;
