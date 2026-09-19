import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vl0lw_beo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vl0lw_beo"/>`,
		"fallback": "hugeicons:mouse-right",
	});
}

export default Component;
