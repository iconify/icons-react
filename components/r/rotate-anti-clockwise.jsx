import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l_k1bgw3w.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l_k1bgw3w"/>`,
		"fallback": "charm:rotate-anti-clockwise",
	});
}

export default Component;
