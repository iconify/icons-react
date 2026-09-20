import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cftcxm0cf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cftcxm0cf"/>`,
		"fallback": "mingcute:user-star-fill",
	});
}

export default Component;
