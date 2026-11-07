import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w7_a60-yr.css';
import '../../css/t/twmo39osj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="w7_a60-yr"/><path class="twmo39osj"/>`,
		"fallback": "solar:medal-ribbon-star-bold-duotone",
	});
}

export default Component;
