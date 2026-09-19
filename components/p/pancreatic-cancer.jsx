import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/di8wmackh.css';
import '../../css/r/r1625-bnw.css';
import '../../css/j/j4wy0zbwb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="di8wmackh"/><path class="r1625-bnw"/><path clip-rule="evenodd" class="j4wy0zbwb"/></g>`,
		"fallback": "healthicons:pancreatic-cancer",
	});
}

export default Component;
