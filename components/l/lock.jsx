import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3tshpbbi.css';

const viewBox = {"width":344,"height":456};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v3tshpbbi"/>`,
		"fallback": "zmdi:lock",
	});
}

export default Component;
