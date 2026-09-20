import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hkraz_b_y.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hkraz_b_y"/>`,
		"fallback": "radix-icons:pin-right",
	});
}

export default Component;
