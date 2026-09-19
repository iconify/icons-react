import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/b3zep_bxk.css';
import '../../css/s/s4iwn3bcn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="b3zep_bxk"/><path clip-rule="evenodd" class="s4iwn3bcn"/></g>`,
		"fallback": "healthicons:lab-search",
	});
}

export default Component;
