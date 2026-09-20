import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/epwa4ib1i.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="epwa4ib1i"/>`,
		"fallback": "system-uicons:paragraph-right",
	});
}

export default Component;
