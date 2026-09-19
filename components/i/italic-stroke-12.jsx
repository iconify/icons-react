import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kc4r43bwq.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kc4r43bwq"/>`,
		"fallback": "garden:italic-stroke-12",
	});
}

export default Component;
