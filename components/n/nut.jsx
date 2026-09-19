import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/y/ydy6h4gep.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><polygon points="8 1.25 14.25 4.75 14.25 11.25 8 14.75 1.75 11.25 1.75 4.75"/><circle class="ydy6h4gep"/></g>`,
		"fallback": "charm:nut",
	});
}

export default Component;
