import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/saxk2_e7o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="saxk2_e7o"/>`,
		"fallback": "iconamoon:number-4-bold",
	});
}

export default Component;
