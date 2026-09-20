import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/y/y3ug6dett.css';
import '../../css/w/wfrd3qbzd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="y3ug6dett"/><path class="wfrd3qbzd"/></g>`,
		"fallback": "solar:text-italic-line-duotone",
	});
}

export default Component;
