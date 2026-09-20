import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gh7u_yvuu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gh7u_yvuu"/>`,
		"fallback": "mingcute:vue-fill",
	});
}

export default Component;
