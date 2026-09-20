import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n39kd-lul.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n39kd-lul"/>`,
		"fallback": "mingcute:traffic-cone-line",
	});
}

export default Component;
