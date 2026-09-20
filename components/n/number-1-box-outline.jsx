import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qg8l-sbko.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qg8l-sbko"/>`,
		"fallback": "mdi:number-1-box-outline",
	});
}

export default Component;
