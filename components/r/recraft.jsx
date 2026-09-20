import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
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
		"content": `<g class="n1lsf0bnc"><path class="fxxjfbcln"/><path class="le_iwvqhj"/></g>`,
		"fallback": "thesvg:recraft",
	});
}

export default Component;
