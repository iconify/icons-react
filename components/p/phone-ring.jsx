import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dl470_b0c.css';
import '../../css/x/xgglfabho.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dl470_b0c"/><path class="xgglfabho"/>`,
		"fallback": "boxicons:phone-ring",
	});
}

export default Component;
