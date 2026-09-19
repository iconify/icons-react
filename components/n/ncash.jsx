import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/q/q853jbciu.css';
import '../../css/t/tzw1xyb1z.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="q853jbciu"/><path class="tzw1xyb1z"/></g>`,
		"fallback": "cryptocurrency-color:ncash",
	});
}

export default Component;
