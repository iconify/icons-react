import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jgqcvfbsc.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/w/wy271hbfy.css';
import '../../css/e/eqe-4ob7x.css';
import '../../css/t/tsrrv4k8w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jgqcvfbsc secondary"/><g class="dt0cm9dhy primary"><path class="wy271hbfy"/><path class="eqe-4ob7x"/><path class="tsrrv4k8w"/></g>`,
		"fallback": "iconaut:pill-bottle-duo",
	});
}

export default Component;
