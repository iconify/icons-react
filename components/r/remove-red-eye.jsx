import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fxe973c_c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fxe973c_c"/>`,
		"fallback": "mdi:remove-red-eye",
	});
}

export default Component;
