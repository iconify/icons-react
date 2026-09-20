import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j0pgd_b0i.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j0pgd_b0i"/>`,
		"fallback": "picon:tram",
	});
}

export default Component;
