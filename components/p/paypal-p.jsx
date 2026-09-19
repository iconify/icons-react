import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/owx_5mb2e.css';

const viewBox = {"width":20,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="owx_5mb2e"/>`,
		"fallback": "fontisto:paypal-p",
	});
}

export default Component;
