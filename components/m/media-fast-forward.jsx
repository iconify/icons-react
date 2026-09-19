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
		"content": `<g class="hntgybcog"><polygon points="8.25 3.75 8.25 12.25 14.25 8"/><polygon points="1.75 3.75 1.75 12.25 7.75 8"/></g>`,
		"fallback": "charm:media-fast-forward",
	});
}

export default Component;
