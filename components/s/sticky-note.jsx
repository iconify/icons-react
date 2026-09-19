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
		"content": `<g class="hntgybcog"><polygon points="9.25 13.25 2.75 13.25 2.75 2.75 13.25 2.75 13.25 9.25"/><polyline points="8.75 13.25 8.75 8.75 13.25 8.75"/></g>`,
		"fallback": "charm:sticky-note",
	});
}

export default Component;
