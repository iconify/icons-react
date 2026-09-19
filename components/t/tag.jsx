import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/l/l0_m7cbau.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><polygon points="7.25 14.25 1.75 8.75 8.75 1.75 14.25 1.75 14.25 7.25"/><circle class="l0_m7cbau"/></g>`,
		"fallback": "charm:tag",
	});
}

export default Component;
