import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/di8wmackh.css';
import '../../css/a/aohpeccap.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="di8wmackh"/><path clip-rule="evenodd" class="aohpeccap"/></g>`,
		"fallback": "healthicons:pancreatic-cancer2x-outline",
	});
}

export default Component;
