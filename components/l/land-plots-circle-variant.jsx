import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dxhmt_b1e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dxhmt_b1e"/>`,
		"fallback": "mdi:land-plots-circle-variant",
	});
}

export default Component;
