import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/odu7kactt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="odu7kactt"/>`,
		"fallback": "mingcute:light-snow-line",
	});
}

export default Component;
