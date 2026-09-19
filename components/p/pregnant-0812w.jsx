import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vq_301b6z.css';
import '../../css/k/kfn3jqb2z.css';
import '../../css/c/cx13d1iqo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vq_301b6z"/><path clip-rule="evenodd" class="kfn3jqb2z"/><path class="cx13d1iqo"/></g>`,
		"fallback": "healthicons:pregnant-0812w",
	});
}

export default Component;
