import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sao9akbmx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sao9akbmx"/>`,
		"fallback": "mingcute:squats-line",
	});
}

export default Component;
