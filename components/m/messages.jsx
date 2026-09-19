import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/h/hbm7lybdm.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><polygon points="14.25 14.25 14.25 5.25 4.75 5.25 4.75 11.25 10.75 11.25"/><path class="hbm7lybdm"/></g>`,
		"fallback": "charm:messages",
	});
}

export default Component;
