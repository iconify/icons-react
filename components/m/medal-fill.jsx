import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/shaz69b3j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="shaz69b3j"/>`,
		"fallback": "mingcute:medal-fill",
	});
}

export default Component;
