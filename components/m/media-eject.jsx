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
		"content": `<g class="hntgybcog"><polygon points="2.75 11.25 13.25 11.25 8 2.75"/><line x1="13.25" x2="2.75" y1="14.25" y2="14.25"/></g>`,
		"fallback": "charm:media-eject",
	});
}

export default Component;
