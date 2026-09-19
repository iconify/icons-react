import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/r/ry5_4tbnb.css';
import '../../css/f/f5mkz9bge.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ry5_4tbnb"/><path class="f5mkz9bge"/></g>`,
		"fallback": "hugeicons:linkedin-01",
	});
}

export default Component;
