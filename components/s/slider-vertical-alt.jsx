import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oe6x8nbyp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oe6x8nbyp"/>`,
		"fallback": "boxicons:slider-vertical-alt",
	});
}

export default Component;
