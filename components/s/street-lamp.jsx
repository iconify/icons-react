import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/h/hdhvzybvr.css';
import '../../css/i/i-ynbibxz.css';
import '../../css/u/ukw3gwlbs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="hdhvzybvr"/><path class="i-ynbibxz"/><path class="ukw3gwlbs"/></g>`,
		"fallback": "iconaut:street-lamp",
	});
}

export default Component;
