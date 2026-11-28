import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wr961sbsf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wr961sbsf"/>`,
		"fallback": "noviair-light:trend-down",
	});
}

export default Component;
