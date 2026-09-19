import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jzq3hur9y.css';
import '../../css/i/iv7-lixhj.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="jzq3hur9y"/><path class="iv7-lixhj"/></g>`,
		"fallback": "cryptocurrency-color:paxg",
	});
}

export default Component;
