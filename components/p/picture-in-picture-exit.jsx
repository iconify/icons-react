import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/t/t7mv73bbb.css';
import '../../css/i/izhj-bbzf.css';
import '../../css/v/v8fo5bcui.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="t7mv73bbb"/><path class="izhj-bbzf"/><path class="v8fo5bcui"/></g>`,
		"fallback": "hugeicons:picture-in-picture-exit",
	});
}

export default Component;
