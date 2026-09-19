import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/ch5uyed_k.css';
import '../../css/f/f7aqdaclx.css';
import '../../css/q/qvngzn1zn.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ch5uyed_k"/><path class="f7aqdaclx"/><path class="qvngzn1zn"/></g>`,
		"fallback": "fluent-emoji-high-contrast:video-camera",
	});
}

export default Component;
