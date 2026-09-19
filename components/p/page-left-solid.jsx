import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yrk6lbcgz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yrk6lbcgz"/>`,
		"fallback": "iconoir:page-left-solid",
	});
}

export default Component;
