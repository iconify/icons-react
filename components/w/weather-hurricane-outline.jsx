import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t33u9_b_x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t33u9_b_x"/>`,
		"fallback": "mdi:weather-hurricane-outline",
	});
}

export default Component;
