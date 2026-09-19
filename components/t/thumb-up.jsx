import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/z/zdycoj9on.css';
import '../../css/v/vb-je4b_f.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="zdycoj9on"/><path class="vb-je4b_f"/></g>`,
		"fallback": "charm:thumb-up",
	});
}

export default Component;
