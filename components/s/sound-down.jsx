import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/m/mu-lqvbsw.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><polygon points="1.75 5.75 1.75 10.25 4.25 10.25 8.25 13.25 8.25 2.75 4.25 5.75"/><path class="mu-lqvbsw"/></g>`,
		"fallback": "charm:sound-down",
	});
}

export default Component;
