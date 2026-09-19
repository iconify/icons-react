import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ubbe94b_k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ubbe94b_k"/>`,
		"fallback": "boxicons:store",
	});
}

export default Component;
