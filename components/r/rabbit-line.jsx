import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tu8wy8bjy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tu8wy8bjy"/>`,
		"fallback": "mingcute:rabbit-line",
	});
}

export default Component;
