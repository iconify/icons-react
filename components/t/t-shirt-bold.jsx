import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fpy-vccyp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fpy-vccyp"/>`,
		"fallback": "solar:t-shirt-bold",
	});
}

export default Component;
