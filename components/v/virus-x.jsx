import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jc_k_y0gh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jc_k_y0gh"/>`,
		"fallback": "noviair-light:virus-x",
	});
}

export default Component;
