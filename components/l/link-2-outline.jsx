import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f-gpmsb9n.css';
import '../../css/m/mdn6n1b_t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f-gpmsb9n"/><path class="mdn6n1b_t"/>`,
		"fallback": "eva:link-2-outline",
	});
}

export default Component;
