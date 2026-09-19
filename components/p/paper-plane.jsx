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
		"content": `<g class="hntgybcog"><polygon points="1.75 1.75 14.25 7.75 1.75 14.25 3.25 7.75"/><line x1="3.75" x2="7.25" y1="7.75" y2="7.75"/></g>`,
		"fallback": "charm:paper-plane",
	});
}

export default Component;
