import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g3_wm5b1w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g3_wm5b1w"/>`,
		"fallback": "mdi:voucher",
	});
}

export default Component;
