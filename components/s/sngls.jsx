import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/o/o69ov9i_j.css';
import '../../css/h/h91w4_b7d.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="o69ov9i_j"/><path class="h91w4_b7d"/></g>`,
		"fallback": "cryptocurrency-color:sngls",
	});
}

export default Component;
