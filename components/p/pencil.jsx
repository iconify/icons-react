import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><polygon points="1.75 11.25 1.75 14.25 4.75 14.25 14.25 4.75 11.25 1.75"/><line x1="8.75" x2="11.25" y1="4.75" y2="7.25"/></g>`,
		"fallback": "charm:pencil",
	});
}

export default Component;
