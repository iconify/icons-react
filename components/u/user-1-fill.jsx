import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t0mz0abna.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t0mz0abna"/>`,
		"fallback": "mingcute:user-1-fill",
	});
}

export default Component;
