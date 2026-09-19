import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/s9bslbb3p.css';
import '../../css/y/ycwep1_0p.css';
import '../../css/l/l2e84ghie.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="s9bslbb3p"/><path class="ycwep1_0p"/><path class="l2e84ghie"/></g>`,
		"fallback": "fluent-emoji-high-contrast:rolling-on-the-floor-laughing",
	});
}

export default Component;
