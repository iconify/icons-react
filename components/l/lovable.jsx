import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yynj4_2gt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yynj4_2gt"/>`,
		"fallback": "bxl:lovable",
	});
}

export default Component;
