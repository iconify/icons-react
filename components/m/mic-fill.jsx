import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/p59trsb5f.css';
import '../../css/m/m-hibnbyq.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="p59trsb5f"/><path class="m-hibnbyq"/></g>`,
		"fallback": "bi:mic-fill",
	});
}

export default Component;
