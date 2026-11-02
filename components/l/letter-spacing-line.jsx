import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xptd2s8fn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xptd2s8fn"/>`,
		"fallback": "mingcute:letter-spacing-line",
	});
}

export default Component;
