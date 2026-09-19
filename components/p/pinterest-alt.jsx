import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r-h1p6yyb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r-h1p6yyb"/>`,
		"fallback": "bxl:pinterest-alt",
	});
}

export default Component;
