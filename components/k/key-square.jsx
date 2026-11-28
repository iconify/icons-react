import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/k/k07fsnbtf.css';
import '../../css/q/qcwlp3baj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="k07fsnbtf"/><path class="qcwlp3baj"/></g>`,
		"fallback": "iconaut:key-square",
	});
}

export default Component;
