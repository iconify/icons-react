import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uylhht6xy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uylhht6xy"/>`,
		"fallback": "mdi:invoice-edit",
	});
}

export default Component;
