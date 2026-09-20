import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lllc-r1nz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lllc-r1nz"/>`,
		"fallback": "solar:syringe-linear",
	});
}

export default Component;
