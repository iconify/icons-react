import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hfqdl_ydw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hfqdl_ydw"/>`,
		"fallback": "hugeicons:shopping-basket-check-out-03",
	});
}

export default Component;
