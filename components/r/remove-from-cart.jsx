import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cj0ye9czm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cj0ye9czm"/>`,
		"fallback": "iconoir:remove-from-cart",
	});
}

export default Component;
