import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/h/hjr2fsbln.css';
import '../../css/r/r1guupl6m.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="hjr2fsbln"/><path class="r1guupl6m"/></g>`,
		"fallback": "charm:stack-push",
	});
}

export default Component;
