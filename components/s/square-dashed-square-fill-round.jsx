import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ejw8libxm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ejw8libxm"/>`,
		"fallback": "coolicons:square-dashed-square-fill-round",
	});
}

export default Component;
