import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/j/jnmmjjidd.css';
import '../../css/e/edlge-m5i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="jnmmjjidd"/><path class="edlge-m5i wm-a"/></g>`,
		"fallback": "withicons:lock-solid",
	});
}

export default Component;
