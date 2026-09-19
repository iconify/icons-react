import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/w-zixeffg.css';
import '../../css/u/uj0x553mk.css';
import '../../css/q/q0ji2gvpn.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="w-zixeffg"/><path class="uj0x553mk"/><path class="q0ji2gvpn"/></g>`,
		"fallback": "fluent-emoji-high-contrast:pig-face",
	});
}

export default Component;
