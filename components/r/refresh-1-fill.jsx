import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a-n94acdm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a-n94acdm"/>`,
		"fallback": "mingcute:refresh-1-fill",
	});
}

export default Component;
