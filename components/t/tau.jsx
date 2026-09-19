import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/q/q0p7ghg8g.css';
import '../../css/i/i6mg8vewc.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="q0p7ghg8g"/><path class="i6mg8vewc"/></g>`,
		"fallback": "cryptocurrency-color:tau",
	});
}

export default Component;
