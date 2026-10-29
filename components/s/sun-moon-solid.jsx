import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/c/c22sxfd0e.css';
import '../../css/e/ea7vlnb4q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="c22sxfd0e"/><path class="ea7vlnb4q wm-a"/></g>`,
		"fallback": "withicons:sun-moon-solid",
	});
}

export default Component;
