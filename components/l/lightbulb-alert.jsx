import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bfof2l2hs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bfof2l2hs"/>`,
		"fallback": "mdi:lightbulb-alert",
	});
}

export default Component;
