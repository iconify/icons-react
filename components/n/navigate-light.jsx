import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/a/ab7mr5bar.css';
import '../../css/h/hvogl5m7g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="ab7mr5bar"/><path class="hvogl5m7g"/></g>`,
		"fallback": "lets-icons:navigate-light",
	});
}

export default Component;
