import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/j/jnmmjjidd.css';
import '../../css/w/wmycssyxv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="jnmmjjidd"/><path class="wm-a wmycssyxv"/></g>`,
		"fallback": "withicons:unlock-solid",
	});
}

export default Component;
