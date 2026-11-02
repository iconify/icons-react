import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/roib-2ula.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="roib-2ula"/>`,
		"fallback": "mingcute:message-circle-plus-line",
	});
}

export default Component;
