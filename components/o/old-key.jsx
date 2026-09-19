import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/b07jmeczk.css';
import '../../css/o/od-27pbgm.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="b07jmeczk"/><path class="od-27pbgm"/></g>`,
		"fallback": "fluent-emoji-high-contrast:old-key",
	});
}

export default Component;
