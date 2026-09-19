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
		"content": `<g class="hntgybcog"><polygon points="13.25 13.25 4.75 8 13.25 2.75"/><line x1="1.75" x2="1.75" y1="3.75" y2="12.25"/></g>`,
		"fallback": "charm:media-back",
	});
}

export default Component;
