import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cyc75eb7n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cyc75eb7n"/>`,
		"fallback": "proicons:text-case-uppercase",
	});
}

export default Component;
