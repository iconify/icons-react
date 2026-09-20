import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l1e5nl9gk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l1e5nl9gk"/>`,
		"fallback": "mingcute:pentagon-line",
	});
}

export default Component;
