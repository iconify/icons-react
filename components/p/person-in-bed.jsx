import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qgkpco-bo.css';
import '../../css/v/v6tlqzb6d.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qgkpco-bo"/><path class="v6tlqzb6d"/></g>`,
		"fallback": "fluent-emoji-high-contrast:person-in-bed",
	});
}

export default Component;
