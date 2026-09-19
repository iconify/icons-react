import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/b/b3qpupbuo.css';
import '../../css/d/d-9ugsbrb.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="b3qpupbuo"/><path class="d-9ugsbrb"/></g>`,
		"fallback": "cryptocurrency-color:itc",
	});
}

export default Component;
