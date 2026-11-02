import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pwjpj5yee.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pwjpj5yee"/>`,
		"fallback": "mingcute:low-beam-headlights-fill",
	});
}

export default Component;
