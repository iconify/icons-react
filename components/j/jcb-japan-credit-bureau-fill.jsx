import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/geb_t6bhw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="geb_t6bhw"/>`,
		"fallback": "mingcute:jcb-japan-credit-bureau-fill",
	});
}

export default Component;
