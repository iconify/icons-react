import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gwp11_b7x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gwp11_b7x"/>`,
		"fallback": "hugeicons:rotate-ccw",
	});
}

export default Component;
