import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qp6z-4mxw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qp6z-4mxw"/>`,
		"fallback": "ri:megaphone-2-fill",
	});
}

export default Component;
