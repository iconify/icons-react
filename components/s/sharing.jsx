import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/d/dgi3ajoxw.css';
import '../../css/r/r860hybaa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="dgi3ajoxw"/><path class="r860hybaa"/></g>`,
		"fallback": "hugeicons:sharing",
	});
}

export default Component;
