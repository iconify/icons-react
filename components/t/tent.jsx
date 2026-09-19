import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/r/re8cb0fzc.css';
import '../../css/q/qnnfivztg.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="re8cb0fzc"/><path class="qnnfivztg"/></g>`,
		"fallback": "charm:tent",
	});
}

export default Component;
