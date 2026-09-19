import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yrgg98-gn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yrgg98-gn"/>`,
		"fallback": "fe:sunny-o",
	});
}

export default Component;
