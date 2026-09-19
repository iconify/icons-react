import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jowakrblr.css';
import '../../css/t/t2r34r-uy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jowakrblr"/><path class="t2r34r-uy"/>`,
		"fallback": "boxicons:octopus",
	});
}

export default Component;
