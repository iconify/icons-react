import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yyzo0y4mh.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yyzo0y4mh"/>`,
		"fallback": "fluent-mdl2:save-all",
	});
}

export default Component;
