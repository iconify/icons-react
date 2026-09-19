import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pgiehtb6o.css';
import '../../css/z/z4lh7jbjg.css';
import '../../css/s/sagau8e7p.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="pgiehtb6o"/><path class="z4lh7jbjg"/><path class="sagau8e7p"/></g>`,
		"fallback": "fluent-emoji-high-contrast:man-firefighter",
	});
}

export default Component;
