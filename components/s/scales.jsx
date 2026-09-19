import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/k/k7-7cvbcl.css';
import '../../css/w/wxvpnh8xn.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="k7-7cvbcl"/><path class="wxvpnh8xn"/></g>`,
		"fallback": "charm:scales",
	});
}

export default Component;
