import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/i/iyxrald2c.css';
import '../../css/j/jmem8m75d.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="iyxrald2c"/><path class="jmem8m75d"/></g>`,
		"fallback": "cryptocurrency-color:iost",
	});
}

export default Component;
