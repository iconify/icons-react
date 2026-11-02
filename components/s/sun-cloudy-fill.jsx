import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qjux9zbyg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qjux9zbyg"/>`,
		"fallback": "mingcute:sun-cloudy-fill",
	});
}

export default Component;
