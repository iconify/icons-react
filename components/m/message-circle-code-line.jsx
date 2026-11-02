import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eaav9wpwh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eaav9wpwh"/>`,
		"fallback": "mingcute:message-circle-code-line",
	});
}

export default Component;
