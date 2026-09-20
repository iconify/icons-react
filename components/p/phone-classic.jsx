import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cxz-pzbmz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cxz-pzbmz"/>`,
		"fallback": "mdi:phone-classic",
	});
}

export default Component;
