import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eqcf1z8cz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="eqcf1z8cz"/>`,
		"fallback": "solar:login-3-bold",
	});
}

export default Component;
