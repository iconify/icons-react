import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/s/s2y8k13rd.css';
import '../../css/f/flcm0z1gr.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="s2y8k13rd"/><path class="flcm0z1gr"/></g>`,
		"fallback": "charm:plant-pot",
	});
}

export default Component;
