import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l7_8i1o_b.css';

const viewBox = {"width":432,"height":408};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l7_8i1o_b"/>`,
		"fallback": "zmdi:star-outline",
	});
}

export default Component;
