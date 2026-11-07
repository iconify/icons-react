import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/f/f8g-6ycep.css';
import '../../css/j/j12sikblj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="f8g-6ycep"/><path class="j12sikblj"/></g>`,
		"fallback": "solar:skip-previous-linear",
	});
}

export default Component;
