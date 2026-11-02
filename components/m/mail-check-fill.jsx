import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rnznm6t1y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rnznm6t1y"/>`,
		"fallback": "mingcute:mail-check-fill",
	});
}

export default Component;
