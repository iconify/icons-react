import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pppd8hv8o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pppd8hv8o"/>`,
		"fallback": "hugeicons:table-cells-merge",
	});
}

export default Component;
