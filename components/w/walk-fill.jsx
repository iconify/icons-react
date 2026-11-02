import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dfxlig6jj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dfxlig6jj"/>`,
		"fallback": "mingcute:walk-fill",
	});
}

export default Component;
