import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/j/j7dfqjbmm.css';
import '../../css/j/jq_r1hcle.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="j7dfqjbmm"/><path class="jq_r1hcle"/></g>`,
		"fallback": "cryptocurrency-color:lpt",
	});
}

export default Component;
