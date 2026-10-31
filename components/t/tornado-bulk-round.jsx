import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/thj7n1o7v.css';
import '../../css/k/k8y94cc3e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="thj7n1o7v"/><path class="k8y94cc3e"/></g>`,
		"fallback": "coolicons:tornado-bulk-round",
	});
}

export default Component;
