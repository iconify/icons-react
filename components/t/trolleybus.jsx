import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/eln1mn-6e.css';
import '../../css/i/iviz_6bdn.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="eln1mn-6e"/><path class="iviz_6bdn"/></g>`,
		"fallback": "fluent-emoji-high-contrast:trolleybus",
	});
}

export default Component;
