import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/q/qij8jp-lm.css';
import '../../css/w/wt5--dbyu.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="qij8jp-lm"/><path class="wt5--dbyu"/></g>`,
		"fallback": "streamline-color:tablet-capsule-flat",
	});
}

export default Component;
