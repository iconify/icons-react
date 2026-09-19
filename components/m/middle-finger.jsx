import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qd0mhfigd.css';
import '../../css/b/bej1-mb_t.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qd0mhfigd"/><path class="bej1-mb_t"/></g>`,
		"fallback": "fluent-emoji-flat:middle-finger",
	});
}

export default Component;
