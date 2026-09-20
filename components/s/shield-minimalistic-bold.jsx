import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wtxs9fivs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wtxs9fivs"/>`,
		"fallback": "solar:shield-minimalistic-bold",
	});
}

export default Component;
