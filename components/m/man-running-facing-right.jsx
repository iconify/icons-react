import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pfamdko6h.css';
import '../../css/a/a4dm_jfat.css';
import '../../css/j/jpriswb3i.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="pfamdko6h"/><path class="a4dm_jfat"/><path class="jpriswb3i"/></g>`,
		"fallback": "fluent-emoji-high-contrast:man-running-facing-right",
	});
}

export default Component;
