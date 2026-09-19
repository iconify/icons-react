import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/o1qx2ccef.css';
import '../../css/n/n47tp7b2n.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="o1qx2ccef"/><path class="n47tp7b2n"/></g>`,
		"fallback": "bi:person-bounding-box",
	});
}

export default Component;
