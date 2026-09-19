import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wblrkxbhv.css';
import '../../css/r/ruq5dd2yh.css';
import '../../css/y/y78pb0g9y.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wblrkxbhv"/><path class="ruq5dd2yh"/><path class="y78pb0g9y"/></g>`,
		"fallback": "fluent-emoji-flat:moon-cake",
	});
}

export default Component;
