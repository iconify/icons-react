import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/ml1wqlf8j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ml1wqlf8j"/>`,
		"fallback": "mingcute:user-remove-2-fill",
	});
}

export default Component;
