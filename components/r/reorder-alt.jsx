import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ithfy_p_n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ithfy_p_n"/>`,
		"fallback": "mono-icons:reorder-alt",
	});
}

export default Component;
