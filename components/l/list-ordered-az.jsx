import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vphx_6btq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vphx_6btq"/>`,
		"fallback": "hugeicons:list-ordered-az",
	});
}

export default Component;
