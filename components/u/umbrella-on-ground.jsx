import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qgh_hrb2v.css';
import '../../css/k/kll8edb2w.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qgh_hrb2v"/><path class="kll8edb2w"/></g>`,
		"fallback": "fluent-emoji-high-contrast:umbrella-on-ground",
	});
}

export default Component;
