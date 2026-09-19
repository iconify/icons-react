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
		"content": `<g class="hntgybcog"><polygon points="7.75 3.75 7.75 12.25 1.75 8"/><polygon points="14.25 3.75 14.25 12.25 8.25 8"/></g>`,
		"fallback": "charm:media-rewind",
	});
}

export default Component;
