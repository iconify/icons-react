import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/m/m0hqfh72g.css';
import '../../css/b/bue-ibchr.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="m0hqfh72g"/><path class="bue-ibchr"/></g>`,
		"fallback": "cryptocurrency-color:repv2",
	});
}

export default Component;
