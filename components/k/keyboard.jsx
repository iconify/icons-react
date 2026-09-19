import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j9monftbs.css';
import '../../css/t/t1342ibou.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="j9monftbs"/><path class="t1342ibou"/></g>`,
		"fallback": "fluent-emoji-flat:keyboard",
	});
}

export default Component;
