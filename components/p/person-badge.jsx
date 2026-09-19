import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/ysjh8m8iv.css';
import '../../css/k/kclf_9tyh.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ysjh8m8iv"/><path class="kclf_9tyh"/></g>`,
		"fallback": "bi:person-badge",
	});
}

export default Component;
