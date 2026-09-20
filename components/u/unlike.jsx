import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p_ffe-b_n.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p_ffe-b_n"/>`,
		"fallback": "subway:unlike",
	});
}

export default Component;
