import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e4j2p-b1q.css';
import '../../css/v/v719t8bvg.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="e4j2p-b1q"/><path class="v719t8bvg"/></g>`,
		"fallback": "fluent-emoji-flat:japanese-bargain-button",
	});
}

export default Component;
