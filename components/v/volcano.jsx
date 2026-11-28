import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rkbrq34zh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rkbrq34zh"/>`,
		"fallback": "noviair-light:volcano",
	});
}

export default Component;
