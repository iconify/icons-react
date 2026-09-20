import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/toa5opbut.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="toa5opbut"/>`,
		"fallback": "mingcute:user-follow-2-fill",
	});
}

export default Component;
