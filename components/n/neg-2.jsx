import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xk4kwybym.css';

const viewBox = {"width":408,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xk4kwybym"/>`,
		"fallback": "zmdi:neg-2",
	});
}

export default Component;
