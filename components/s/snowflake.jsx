import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d3l0w_6or.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d3l0w_6or"/>`,
		"fallback": "fa7-solid:snowflake",
	});
}

export default Component;
