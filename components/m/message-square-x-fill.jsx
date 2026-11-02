import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m-53rmblg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m-53rmblg"/>`,
		"fallback": "mingcute:message-square-x-fill",
	});
}

export default Component;
