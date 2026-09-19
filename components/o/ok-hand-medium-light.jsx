import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p9-k_-blh.css';
import '../../css/j/jidqilbrq.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="p9-k_-blh"/><path class="jidqilbrq"/></g>`,
		"fallback": "fluent-emoji-flat:ok-hand-medium-light",
	});
}

export default Component;
