import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zyaeu9bxd.css';
import '../../css/q/qcdjkw6ec.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="zyaeu9bxd"/><path class="qcdjkw6ec"/></g>`,
		"fallback": "bi:sina-weibo",
	});
}

export default Component;
