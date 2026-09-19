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
		"content": `<g class="hntgybcog"><polygon points="2.75 13.25 11.25 8 2.75 2.75"/><line x1="14.25" x2="14.25" y1="3.75" y2="12.25"/></g>`,
		"fallback": "charm:media-skip",
	});
}

export default Component;
