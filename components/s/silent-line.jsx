import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tiha8cybs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tiha8cybs"/>`,
		"fallback": "mingcute:silent-line",
	});
}

export default Component;
