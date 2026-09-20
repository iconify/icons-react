import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/liv7s6d2d.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="liv7s6d2d"/>`,
		"fallback": "pinhead:triangle-down-with-plus",
	});
}

export default Component;
