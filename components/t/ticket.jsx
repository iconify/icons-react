import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/f/fqag3lg0a.css';
import '../../css/i/ins8vbbfb.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="fqag3lg0a"/><path class="ins8vbbfb"/></g>`,
		"fallback": "charm:ticket",
	});
}

export default Component;
