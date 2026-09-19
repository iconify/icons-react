import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/haulcp80q.css';
import '../../css/b/b_6n3o8yq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="haulcp80q"/><path class="b_6n3o8yq"/></g>`,
		"fallback": "healthicons:smoking",
	});
}

export default Component;
