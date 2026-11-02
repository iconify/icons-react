import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tw6xa2_bl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tw6xa2_bl"/>`,
		"fallback": "mingcute:text-direction-right-fill",
	});
}

export default Component;
