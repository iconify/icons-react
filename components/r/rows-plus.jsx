import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yryw_xb1e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yryw_xb1e"/>`,
		"fallback": "noviair-light:rows-plus",
	});
}

export default Component;
