import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ek6t0acuy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ek6t0acuy"/>`,
		"fallback": "mdi:spy-circle-off",
	});
}

export default Component;
