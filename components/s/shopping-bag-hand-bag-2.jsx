import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jqj5vw8cn.css';
import '../../css/d/dsg7quhrl.css';
import '../../css/g/g9cxag0yc.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jqj5vw8cn"/><path class="dsg7quhrl"/><path class="g9cxag0yc"/></g>`,
		"fallback": "streamline-flex-color:shopping-bag-hand-bag-2",
	});
}

export default Component;
