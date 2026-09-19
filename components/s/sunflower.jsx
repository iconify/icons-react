import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/au147rbej.css';
import '../../css/v/vp3486b-o.css';
import '../../css/s/sbx5ivbwj.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="au147rbej"/><path class="vp3486b-o"/><path class="sbx5ivbwj"/></g>`,
		"fallback": "fluent-emoji-high-contrast:sunflower",
	});
}

export default Component;
