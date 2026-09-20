import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yrme0_b0x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yrme0_b0x"/>`,
		"fallback": "thesvg-color:tablecheck",
	});
}

export default Component;
