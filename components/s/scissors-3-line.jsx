import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dsy5554rj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dsy5554rj"/>`,
		"fallback": "mingcute:scissors-3-line",
	});
}

export default Component;
