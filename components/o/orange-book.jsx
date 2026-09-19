import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kokbno5ao.css';
import '../../css/e/e3idh-b6l.css';
import '../../css/w/wc4q89e1n.css';
import '../../css/f/f_ok_fbhr.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kokbno5ao"/><path class="e3idh-b6l"/><path class="wc4q89e1n"/><path class="f_ok_fbhr"/></g>`,
		"fallback": "fluent-emoji-flat:orange-book",
	});
}

export default Component;
