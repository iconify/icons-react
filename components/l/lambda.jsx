import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/j/j0y6bac5m.css';
import '../../css/o/ogdcjo4or.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="j0y6bac5m"/><path class="ogdcjo4or"/></g>`,
		"fallback": "iconaut:lambda",
	});
}

export default Component;
