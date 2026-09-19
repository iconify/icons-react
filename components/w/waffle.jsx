import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/x6xhn3kbs.css';
import '../../css/v/va6flgbjg.css';
import '../../css/w/wxs07lbfh.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="x6xhn3kbs"/><path class="va6flgbjg"/><path class="wxs07lbfh"/></g>`,
		"fallback": "fluent-emoji-high-contrast:waffle",
	});
}

export default Component;
