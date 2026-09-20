import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tvua4obxe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tvua4obxe"/>`,
		"fallback": "mingcute:movie-fill",
	});
}

export default Component;
