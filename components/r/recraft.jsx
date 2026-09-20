import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/f/fxxjfbcln.css';
import '../../css/l/le_iwvqhj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="fxxjfbcln"/><path class="le_iwvqhj"/></g>`,
		"fallback": "thesvg-color:recraft",
	});
}

export default Component;
