import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tyon-qbdh.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tyon-qbdh"/>`,
		"fallback": "memory:menu-top-right",
	});
}

export default Component;
