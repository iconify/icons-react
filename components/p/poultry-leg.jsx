import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/ws1ba1bku.css';
import '../../css/h/hzv6k0s6v.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ws1ba1bku"/><path class="hzv6k0s6v"/></g>`,
		"fallback": "fluent-emoji-high-contrast:poultry-leg",
	});
}

export default Component;
