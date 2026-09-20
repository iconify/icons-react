import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lg1uq6s2e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lg1uq6s2e"/>`,
		"fallback": "mingcute:seal-line",
	});
}

export default Component;
