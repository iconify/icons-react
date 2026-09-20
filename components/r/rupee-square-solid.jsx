import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ed0ehecrn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ed0ehecrn"/>`,
		"fallback": "mynaui:rupee-square-solid",
	});
}

export default Component;
