import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/v/v7w_yx9xg.css';
import '../../css/m/moubh5bia.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="v7w_yx9xg"/><path class="moubh5bia"/></g>`,
		"fallback": "fad:squareswitch-off",
	});
}

export default Component;
