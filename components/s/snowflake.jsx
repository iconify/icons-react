import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bmb4kccad.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bmb4kccad"/>`,
		"fallback": "fa6-solid:snowflake",
	});
}

export default Component;
