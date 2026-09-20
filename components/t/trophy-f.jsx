import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ttjdx3xxm.css';

const viewBox = {"width":24,"height":24,"left":-7,"top":-2};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ttjdx3xxm"/>`,
		"fallback": "jam:trophy-f",
	});
}

export default Component;
