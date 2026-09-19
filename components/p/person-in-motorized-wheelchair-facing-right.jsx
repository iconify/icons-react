import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u1g-f35-i.css';
import '../../css/j/jodc9sb6w.css';
import '../../css/u/ujxkkxesv.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="u1g-f35-i"/><path class="jodc9sb6w"/><path class="ujxkkxesv"/></g>`,
		"fallback": "fluent-emoji-high-contrast:person-in-motorized-wheelchair-facing-right",
	});
}

export default Component;
