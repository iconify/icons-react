import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/e/e6ot97bre.css';
import '../../css/y/yuyh33ico.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="e6ot97bre"/><path class="yuyh33ico"/></g>`,
		"fallback": "cryptocurrency-color:via",
	});
}

export default Component;
