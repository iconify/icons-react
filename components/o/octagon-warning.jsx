import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/c/c10-9xbad.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><polygon points="5.25 1.75 10.75 1.75 14.25 5.25 14.25 10.75 10.75 14.25 5.25 14.25 1.75 10.75 1.75 5.25"/><path class="c10-9xbad"/></g>`,
		"fallback": "charm:octagon-warning",
	});
}

export default Component;
