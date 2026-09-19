import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xhfhmb-ve.css';
import '../../css/s/sorxzqbxa.css';
import '../../css/s/sfe0kwq8b.css';
import '../../css/q/q5jpikb3y.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="xhfhmb-ve"/><path class="sorxzqbxa"/><path class="sfe0kwq8b"/><path class="q5jpikb3y"/></g>`,
		"fallback": "fluent-emoji-high-contrast:man-astronaut",
	});
}

export default Component;
