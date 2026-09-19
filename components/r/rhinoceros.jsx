import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rlyasgq3o.css';
import '../../css/e/ejye98l2k.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="rlyasgq3o"/><path class="ejye98l2k"/></g>`,
		"fallback": "fluent-emoji-high-contrast:rhinoceros",
	});
}

export default Component;
