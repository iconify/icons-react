import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/svhmzzwpg.css';
import '../../css/a/az0f5oiia.css';
import '../../css/r/rhiflirgq.css';
import '../../css/l/ljkj8kesp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="svhmzzwpg"/><path clip-rule="evenodd" class="az0f5oiia"/><path class="rhiflirgq"/><path class="ljkj8kesp"/></g>`,
		"fallback": "healthicons:plantation-worker-alt",
	});
}

export default Component;
